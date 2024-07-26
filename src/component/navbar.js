import React, { useEffect, useState } from 'react';
import Logo from './Logo/logo.png';
import { useNavigate } from 'react-router-dom';
import { getBooks,storyy} from '../Api/api';
function Navbar() {

  const [search,setSearch]=useState("")
  const Navigate=useNavigate()
  
  const fct=()=> {
    return console.log("search",search)
  }
  const handlechange=(aaaa)=> {
    setSearch(aaaa.target.value)
  }
  return (
    <div className="mx-auto max-w-screen-3xl px-4 py-3 text-white bg-blue-500">
      <div className="flex flex-wrap items-center justify-between gap-y-4">
      <img src={Logo }alt="Logo" className="h-[3%] w-[3%]" /> 
        <div className="relative w-full md:w-max flex items-center gap-2 mx-auto">
          <input
            type="search"
            placeholder="Type here..."
            className="pr-20 pl-4 py-2 bg-blue-500 text-white rounded-lg min-w-[288px] border border-white"
            value={search}
            onChange={handlechange}
          />
          <button  className="absolute right-1 top-1 bg-white text-black rounded px-3 py-1" onClick={fct}>
            Search
          </button>
        </div>
        <div className="flex flex-nowrap gap-2">
          <button className="border border-blue-gray-500 text-blue-gray-500 rounded px-3 py-1" onClick={()=>{Navigate("/login")}}>
            Log In
          </button>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded px-3 py-1" onClick={()=>{Navigate("/signup")}}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
