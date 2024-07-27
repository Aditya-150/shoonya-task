/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    onSearch(searchTerm);
  }, [searchTerm, onSearch]);

  return (
    <div className="w-full lg:w-2/5">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search retreats by title"
        className="p-2 bg-primary text-white placeholder:text-white rounded w-full"
      />
    </div>
  );
};

export default Search;
