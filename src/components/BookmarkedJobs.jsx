// src/components/BookmarkedJobs.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/authContext/Index'; 
import Jobdetails from './Jobdetails'; 

const BookmarkedJobs = () => {
  const { currentUser } = useAuth();
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);

  useEffect(() => {
    const fetchBookmarkedJobs = () => {
      if (currentUser) {
        const bookmarksKey = `bookmarks_${currentUser.uid}`;
        const bookmarkedTitles = JSON.parse(localStorage.getItem(bookmarksKey)) || [];

        // Fetch job details for each bookmarked title
        // In a real app, you might want to fetch this data from a backend API
        const fetchJobs = async () => {
          // Simulate fetching job details
          // Replace with actual API call if needed
          const jobs = bookmarkedTitles.map(title => ({
            title,
            companyName: 'Example Company', // Replace with actual data
            remote: 'Remote', // Replace with actual data
            applicationLink: '#', // Replace with actual data
            postdate: '2024-08-01', // Replace with actual data
            description: 'Example Description', // Replace with actual data
            responsibilities: 'Example Responsibilities', // Replace with actual data
            requirements: 'Example Requirements', // Replace with actual data
            jobtype: 'Full-time', // Replace with actual data
            city: 'Example City', // Replace with actual data
          }));

          setBookmarkedJobs(jobs);
        };

        fetchJobs();
      }
    };

    fetchBookmarkedJobs();
  }, [currentUser]);

  return (
    <div>
      <h2>Bookmarked Jobs</h2>
      {bookmarkedJobs.length === 0 ? (
        <p>No bookmarked jobs found.</p>
      ) : (
        bookmarkedJobs.map(job => (
          <Jobdetails
            key={job.title} // Use a unique identifier if available
            title={job.title}
            companyName={job.companyName}
            remote={job.remote}
            applicationLink={job.applicationLink}
            postdate={job.postdate}
            description={job.description}
            responsibilities={job.responsibilities}
            requirements={job.requirements}
            jobtype={job.jobtype}
            city={job.city}
          />
        ))
      )}
    </div>
  );
};

export default BookmarkedJobs;
