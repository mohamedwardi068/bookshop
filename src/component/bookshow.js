import React from 'react'

function Bookshow() {
   
       
     
        return (
            
          < div className="w-56 h-[96%] border-2 border-sky-500 rounded  mt-4 ml-4 " >
            <div  className="h-15 w-15 pt-1 pb-1 pl-4 pr-4 ">
              <img
                src="https://m.media-amazon.com/images/I/61pDNU9qEGL._SL1360_.jpg"
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </div> <br></br>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <p color="blue-gray" className="font-medium ml-1">
                Can't Hurt Me
                </p>
                
              </div>
              <p
                variant="small"
                color="gray"
                className="font-normal opacity-75 ml-2"
              >
                Master Your Mind and Defy the Odds
              </p>
            </div>
            <div className="pt-0 mb-2 flex items-center justify-between">
              <button
                ripple={false}
                fullWidth={true}
                className="bg-blue-500  shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100  border-blue-gray-500 text-blue-gray-500 rounded px-3 py-1 mt-1 ml-1"
              >
                Add to Cart
              </button>
              <p color="blue-gray" className="font-medium  pr-3">
                  $20.00
            </p>
            </div>
           
          </div>
        );
      }
    

export default Bookshow