import { useState } from "react";
function Search(props) {
  const { getInput } = props;
  const [input, setInput] = useState("");
  const sendQuery = (e) => {
    e.preventDefault();
    getInput(1, input);
  };
  return (
    <div className="w-full h-10 flex items-center bg-white rounded-md text-gray-600 mt-16">
      <div className="px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <form onSubmit={sendQuery} className="w-full">
        <input
          className="py-1 font-roboto-slab w-full rounded-md focus:outline-none"
          type="text"
          placeholder="search users"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Search;
