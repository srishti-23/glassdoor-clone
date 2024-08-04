import React, { useState, useEffect } from 'react';
import { CiBookmark } from 'react-icons/ci';
import { useAuth } from '../contexts/authContext/Index' 

const Jobcard = ({ title, companyName, remote, applicationLink, postdate }) => {
  const { currentUser } = useAuth();
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const checkBookmark = () => {
      if (currentUser) {
        const bookmarksKey = `bookmarks_${currentUser.uid}`
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
    <div className='flex p-5 gap-3'>
      <div className='flex flex-col w-5/6'>
        <div className='flex gap-10 bg-slate-100 border rounded'>
          <div className='flex flex-col p-3 m-auto gap-3'>
            <p>{companyName}</p>
            <p className='font-bold text-2xl'>{title}</p>
            <p>Remote: {remote}</p>
            <p>5T - 10T [Employer Est]</p>
            <a className='bg-green-400 border-black rounded text-center' href={applicationLink}>Easy Apply</a>
          </div>
          <div className='flex flex-col p-4 items-end'>
            <CiBookmark
              onClick={toggleBookmark}
              size={25}
              className={`cursor-pointer ${isBookmarked ? 'text-green-600' : ''}`}
            />
            <p>{postdate}</p>
          </div>
        </div>
        <br /><br />
      </div>
    </div>
  );
};

export default Jobcard;