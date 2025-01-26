import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // Debounce function to limit the number of API requests
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  // Function to fetch search results
  const fetchResults = async (searchQuery) => {
    if (searchQuery.trim() === "") {
      setResults([]);  // Clear results when input is empty
      return;
    }
  
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/api/search", {
        params: { query: searchQuery },
      });
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };
  ;

  // Debounced search function
  const debouncedSearch = debounce(fetchResults, 500);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]); // Clear results immediately when input is empty
    } else {
      debouncedSearch(query); // Trigger search when query changes
    }
  }, [query]);

  return (
    <div className="p-4">
      <div className="flex items-center justify-center">
        <input
          type="text"
          value={query}
          placeholder="Search items..."
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 w-[300px] border border-gray-300 rounded-md"
        />
      </div>

      <div className="mt-4">
        {loading && <p>Loading...</p>}
        {results.length > 0 ? (
          <ul className="">
            {results.map((item, index) => (
              <li key={index} className="p-2 border-b">
                <h3 className="font-semibold">{item.title}</h3>
              </li>
            ))}
          </ul>
        ) : (
          query.trim() !== "" && <p className="text-gray-500">No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
