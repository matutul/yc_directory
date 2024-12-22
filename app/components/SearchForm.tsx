import React from "react";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <form action={"/"} className="search-form">
      <input
        name="query"
        type="text"
        className="search-input"
        placeholder="Search Startups"
        defaultValue={query}
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button type="submit" className="search-btn text-white">
          <Search />
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
