import React, { useState } from "react";
import icon from "../assets/icon.svg";
import { MdSearch } from "react-icons/md";
import { GrNotification } from "react-icons/gr";
import { VscAccount } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "../index.css";
import signin from "../assets/signin.svg";
import { useAuth } from "../contexts/authContext/Index";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = async () => {
    if (query.trim() === "") {
      alert("Please enter a search query");
      return;
    }

    setLoading(true);
    setError(null);

    const url =
      "https://jsearch.p.rapidapi.com/search-filters?query=Node.js%20developer%20in%20New-York%2CUSA&date_posted=all";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "93ddc6f045msh1f44c4c086b44d6p128e74jsn39785836b621",
        "x-rapidapi-host": "jsearch.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleLogout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <>
      <div className="h-16 flex w-full bg-[#FFFFFF] border-b border-gray-200 items-center">
        <div className="mt-4 ml-2 mb-4">
          <Link to="/">
            <img src={icon} className="w-32 h-[9] ml-8" alt="icon" />
          </Link>
        </div>
        <ul className="hidden md:flex li-none justify-center gap-12 ml-72 font-medium mt-4 mb-4">
          <li className="hover-underline">
            <Link to="/community">Community</Link>
          </li>
          <li className="hover-underline">
            <Link to="/jobs">Jobs</Link>
          </li>
          <li className="hover-underline">
            <Link to="/companies">Companies</Link>
          </li>
          <li className="hover-underline">
            <Link to="/salary">Salaries</Link>
          </li>
        </ul>
        <div className="ml-auto flex items-center gap-4 mr-8 relative">
          <div className="relative flex items-center hover:bg-gray-200 hover:rounded-full hover:p-2">
            <MdSearch size={25} className="text-gray-500 cursor-pointer" />
            <input
              type="text"
              value={query}
              className="ml-2 p-2 border border-gray-300 rounded-full"
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Search"
            />
            {loading && (
              <p className="absolute top-full mt-2 text-gray-500">Loading...</p>
            )}
            {error && (
              <p className="absolute top-full mt-2 text-red-500">{error}</p>
            )}
          </div>
          {userLoggedIn ? (
            <>
              <div className="hover:bg-gray-200 hover:rounded-full hover:p-2">
                <GrNotification size={20} />
              </div>
              <div className="hover:bg-gray-200 hover:rounded-full hover:p-2">
                <VscAccount
                  size={20}
                  onClick={handleLogout}
                  className="cursor-pointer"
                />
              </div>
            </>
          ) : (
            <Link
              to="/signup"
              className="hover:bg-gray-200 hover:rounded-full hover:p-2"
            >
              Signup
            </Link>
          )}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="cursor-pointer">
              <GiHamburgerMenu size={25} />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-gray-100 border-t border-gray-200 p-4 z-10">
          <li className="hover-underline py-2">
            <Link to="/community" onClick={() => setIsOpen(false)}>
              Community
            </Link>
          </li>
          <li className="hover-underline py-2">
            <Link to="/jobs" onClick={() => setIsOpen(false)}>
              Jobs
            </Link>
          </li>
          <li className="hover-underline py-2">
            <Link to="/companies" onClick={() => setIsOpen(false)}>
              Companies
            </Link>
          </li>
          <li className="hover-underline py-2">
            <Link to="/salary" onClick={() => setIsOpen(false)}>
              Salaries
            </Link>
          </li>
          <div className="flex flex-col items-center gap-4 mt-4">
            <div className="relative flex items-center">
              <MdSearch size={25} className="text-gray-500 cursor-pointer" />
              <input
                type="text"
                value={query}
                className="ml-2 p-2 border border-gray-300 rounded-full"
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Search"
              />
              {loading && (
                <p className="absolute top-full mt-2 text-gray-500">
                  Loading...
                </p>
              )}
              {error && (
                <p className="absolute top-full mt-2 text-red-500">{error}</p>
              )}
            </div>
            {userLoggedIn ? (
              <>
                <div className="hover:bg-gray-200 hover:rounded-full hover:p-2">
                  <GrNotification size={20} />
                </div>
                <div className="hover:bg-gray-200 hover:rounded-full hover:p-2">
                  <VscAccount size={20} onClick={handleLogout} />
                </div>
              </>
            ) : (
              <Link
                to="/signup"
                className="hover:bg-gray-200 hover:rounded-full hover:p-2"
              >
                <button className="flex items-center bg-black w-32 h-12 text-white ml-40 p-4 my-2 rounded-md">
                  <img src={signin} className="w-8 h-8 ml-0" alt="Sign in" />
                  <span className="font-medium ml-2">Sign in</span>
                </button>
              </Link>
            )}
          </div>
        </ul>
      )}
    </>
  );
};

export default Navbar;

