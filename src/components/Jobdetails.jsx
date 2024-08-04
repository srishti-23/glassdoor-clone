import React, { useState, useEffect } from 'react';
import { CiBookmark } from 'react-icons/ci';
import { useAuth } from '../contexts/authContext/Index'; // Ensure path is correct

const Jobdetails = ({
  title,
  companyName,
  remote,
  applicationLink,
  postdate,
  description,
  responsibilities,
  requirements,
  jobtype,
  city,
}) => {
  const { currentUser } = useAuth();
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const checkBookmark = () => {
      if (currentUser) {
        const bookmarksKey = `bookmarks_${currentUser.uid}`;
        const bookmarks = JSON.parse(localStorage.getItem(bookmarksKey)) || [];
        setIsBookmarked(bookmarks.includes(title)); // Use a unique identifier if possible
      }
    };
    checkBookmark();
  }, [title, currentUser]);

  const toggleBookmark = () => {
    if (!currentUser) {
      alert('You need to sign in to bookmark content.');
      return;
    }

    const bookmarksKey = `bookmarks_${currentUser.uid}`;
    const bookmarks = JSON.parse(localStorage.getItem(bookmarksKey)) || [];
    if (bookmarks.includes(title)) {
      // Remove bookmark
      const updatedBookmarks = bookmarks.filter(item => item !== title);
      localStorage.setItem(bookmarksKey, JSON.stringify(updatedBookmarks));
      setIsBookmarked(false);
    } else {
      // Add bookmark
      bookmarks.push(title);
      localStorage.setItem(bookmarksKey, JSON.stringify(bookmarks));
      setIsBookmarked(true);
    }
  };

  return (
    <div>
      <div className="flex flex-col w-[80%] border border-black rounded bg-slate-50">
        <div className="flex justify-between">
          <div className="flex flex-col gap-3 p-3 bg-slate-50">
            <p>{companyName}</p>
            <p className="font-bold text-3xl">{title}</p>
            <p>Remote: {remote}</p>
          </div>
          <div className="flex flex-row my-auto mx-auto p-4 gap-4">
            <CiBookmark
              onClick={toggleBookmark}
              size={35}
              className={`cursor-pointer  ${isBookmarked ? 'text-green-600' : ''}`}
            />
            <a
              className="bg-green-400 border-black rounded text-center m-auto p-2"
              href={applicationLink}
            >
              Easy Apply
            </a>
          </div>
        </div>
        <br />
        <br />
        <div className="flex flex-col gap-2 p-3">
          <p className="font-bold">Job Description:</p>
          <p>{description}</p>
          <p className="font-bold">Responsibilities:</p>
          <p>{responsibilities}</p>
          <p>Requirements: {requirements}</p>
          <p>Job Type: {jobtype}</p>
          <p>City: {city}</p>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Jobdetails;