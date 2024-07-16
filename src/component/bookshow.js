import React, { useState } from 'react';


import Modal from 'react-modal';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
   
    padding: '0',

  
    transform: 'translate(-50%, -50%)',
  },
};function Bookshow({title,price,description,image ,genre,author}) {
  
      const test={title,price,description,image ,genre,author}
console.log("sconde ",test)
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }

        return (
          <>
             <Modal
        isOpen={modalIsOpen}
       // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
   
      >
  {/* <Detailsbook/> */}
      </Modal>
            
          < div className="w-56 h-[96%] border-2 border-sky-500 rounded  mt-4 ml-4 " >
            <div  className="h-15 w-15 pt-1 pb-1 pl-4 pr-4 ">
              <img
                src={image}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </div> <br></br>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <p color="blue-gray" className="font-medium ml-1">
                {title}
                </p>
                
              </div>
              <p
                variant="small"
                color="gray"
                className="font-normal opacity-75 ml-2"
              >
                {description}
              </p>
            </div>
            <div className="pt-0 mb-2 flex items-center justify-between">
              <button
                ripple={false}
                fullWidth={true}
                className="bg-blue-500  shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100  border-blue-gray-500 text-blue-gray-500 rounded px-3 py-1 mt-1 ml-1 "
                onClick={openModal}
              >
                Add to Cart
              </button>
              <p color="blue-gray" className="font-medium  pr-3">
                  {price}
            </p>
            </div>
           
          </div>
       
{/*             
      <div show={showModal} >
      <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="">
 
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

  <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
    
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
              <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
            </div>
            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Deactivate account</h3>
              <div class="mt-2">
                <p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>
          <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>

      </div> */}
          </>
        );
        
      }
    

export default Bookshow