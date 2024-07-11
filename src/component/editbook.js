import React from 'react'


function Editbook() {
  return (
    <>
    < div className= " block items-center  border-4 border-sky-500 rounded  mt-4 ml-4 h-[40%] w-[40%]  " >
    <div className=' grid grid-cols-1 grid-rows-1 pl-3 pr-3 py-2'>
    <input
            type="search"
            placeholder="Bookname..."
            className="pl-2 pr-2 py-2 bg-center bg-blue-500 text-white rounded-lg min-w-[40%] border border-white"
            
          />
     
          <input
            type="search"
            placeholder="Price  ..."
            className="pl-1 pr-1 py-2 bg-center bg-blue-500 text-white rounded-lg min-w-[40%] border border-white"
           
          />
      
          <input
            type="search"
            placeholder="Quantity..."
            className="pl-1 pr-1 py-2 bg-center bg-blue-500 text-white rounded-lg min-w-[40%] border border-white"
           
          />
          </div>
           <div className="flex flex-nowrap gap-2 pl-[60%] pr-6">
          <button className="border border-blue-gray-500 text-blue-gray-500 rounded px-3 py-1">
            Cancel
          </button>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded px-3 py-1">
            Submit
          </button>
        </div>
         






    </div>
    </>
  )
}

export default Editbook