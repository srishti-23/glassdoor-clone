import React, { useEffect, useState } from "react";
import { baseapi } from "../api/axiosfile";
import Jobcard from "../components/Jobcard";
import Jobdetails from "../components/Jobdetails";
import { useDispatch } from "react-redux";
import { selectjob } from "../store/jobslice/Jobslice";
import Searchcomponent from "../components/Searchcomponent";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Jobs = () => {
  const [jobs, setjobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const dispatch = useDispatch();

  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    const job = async () => {
      try {
        const jobdata = await baseapi("/search");
        setjobs(jobdata.data);
        if (jobdata.data.length > 0) {
          setSelectedJob(jobdata.data[0]); // Set the first job as default selected job
          dispatch(selectjob(jobdata.data[0].job_id)); // Use the correct action
        }
      } catch (error) {
        console.error("error fetching jobs", error);
      }

      console.log(jobs);
    };
    job();
  }, [dispatch]);

  const savejobid = (job) => {
    setSelectedJob(job);
    dispatch(selectjob(job.job_id));
  };

  return (
    <>
      <div className="w-full">
        <Searchcomponent />
        <Link to="/boomarkedjobs">
          <button className="mt-4 text-md font-medium ml-8">Saved Jobs</button>
        </Link>

        <hr />
        <div className="flex flex-col md:flex-row mt-10 mx-auto">
          {!isSmallScreen && (
            <div className="w-full md:w-1/2 rounded-md">
              {jobs &&
                jobs.map((job) => (
                  <div
                    key={job.job_id}
                    onClick={() => savejobid(job)}
                    className="cursor-pointer"
                  >
                    <Jobcard
                      title={job.job_title}
                      companyName={job.employer_name}
                      remote={job.job_is_remote}
                      applicationLink={job.job_apply_link}
                      postdate={job.job_posted_at_datetime_utc}
                    />
                  </div>
                ))}
            </div>
          )}

          <div className="w-full md:w-1/2">
            {selectedJob && (
              <Jobdetails
                title={selectedJob.job_title}
                companyName={selectedJob.employer_name}
                remote={selectedJob.job_is_remote}
                applicationLink={selectedJob.job_apply_link}
                postdate={selectedJob.job_posted_at_datetime_utc}
                description={selectedJob.job_description}
                responsibilities={selectedJob.job_highlights?.Responsibilities}
                requirements={selectedJob.job_highlights?.Qualification}
                jobtype={selectedJob.job_employment_type}
                city={selectedJob.job_city}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
