import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOder() {
  const [query, setQuery] = useState("");
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    query && navigation(`/order/${query}`);
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block min-w-[400px] p-4 ps-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark: dark:focus:border-blue-500 text-base"
          placeholder="Search order ..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchOder;
