import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOder() {
  const [query, setQuery] = useState("");
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigation(`/order/${query}`);
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-400 dark:text-gray-400"
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
          className="block w-96 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-transparent dark:border-gray-600 dark:placeholder-gray-500 dark:focus:ring-yellow-400 dark:focus:border-yellow-400"
          placeholder="Search by order number"
        />

        <button
          type="submit"
          className="text-grey-900 absolute end-2.5 bottom-2.5 bg-yellow-400  focus:ring-4
          hover:bg-yellow-300 transition-all focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-yellow-400 dark:hover:bg-yellow-400 dark:focus:ring-yellow-400"
          onChange={(e) => setQuery(e.target.value)}
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchOder;
