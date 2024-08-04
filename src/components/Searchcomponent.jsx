import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import axios from "axios";

function SearchComponent() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (query.trim() === "") {
      alert("Please enter a search query");
      return;
    }

    setLoading(true);
    setError(null);

    const url = 'https://jsearch.p.rapidapi.com/search-filters?query=Node.js%20developer%20in%20New-York%2CUSA&date_posted=all';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '93ddc6f045msh1f44c4c086b44d6p128e74jsn39785836b621',
            'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
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

  return (
    <div>
     <div className="mt-4 mx-auto bg-[#F4F4F4] rounded-full flex items-center max-w-md w-full p-2 sm:p-4">
      <MdSearch size={24} className="ml-4" />
      <input
        type="text"
        value={query}
        className="flex-1 text-lg font-normal ml-2 bg-[#F4F4F4] text-gray-500 placeholder-gray-400 outline-none"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Find your perfect job"
      />
      <div className="hidden md:block bg-white w-px h-6 mx-2"></div>
      <div className="hidden md:flex items-center gap-2">
        <CiLocationOn size={20} />
        <span className="text-lg">Location</span>
      </div>
    </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchComponent;
