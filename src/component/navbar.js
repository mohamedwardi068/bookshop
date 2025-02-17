import React from 'react';
import Logo from './logo.png';
function Navbar() {
  return (
    <div className="mx-auto max-w-screen-3xl px-4 py-3 text-white bg-blue-500">
      <div className="flex flex-wrap items-center justify-between gap-y-4">
      <img src={Logo }alt="Logo" className="h-[3%] w-[3%]" /> 
        <div className="relative w-full md:w-max flex items-center gap-2 mx-auto">
          <input
            type="search"
            placeholder="Type here..."
            className="pr-20 pl-4 py-2 bg-blue-500 text-white rounded-lg min-w-[288px] border border-white"
          />
          <button className="absolute right-1 top-1 bg-white text-black rounded px-3 py-1">
            Search
          </button>
        </div>
        <div className="flex flex-nowrap gap-2">
          <button className="border border-blue-gray-500 text-blue-gray-500 rounded px-3 py-1">
            Log In
          </button>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded px-3 py-1">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
