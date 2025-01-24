import React from "react";

const Search = ({ searchitem, onSearchItem }) => {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search your needs..."
          className="p-5  h-5 w-fit border-1"
          value={searchitem}
          onChange={(event) => onSearchItem(event.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
