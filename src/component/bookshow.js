import React from 'react'

function Bookshow() {
   
       
     
        return (
            
          < div className="w-56 h-[96%] border-2 border-sky-500 rounded  mt-4 ml-4 " >
            <div shadow={false} floated={false} className="h-15 w-15 pt-4 pb-4 pl-4 pr-4 ">
              <img
                src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </div> <br></br>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <p color="blue-gray" className="font-medium ml-1">
                  Apple AirPods
                </p>
                
              </div>
              <p
                variant="small"
                color="gray"
                className="font-normal opacity-75 ml-2"
              >
                With plenty of talk and listen time, voice-activated Siri access, and
                an available wireless charging case.
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
                  $95.00
            </p>
            </div>
           
          </div>
        );
      }
    

export default Bookshow