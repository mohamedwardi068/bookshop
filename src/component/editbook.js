import React, { useState } from 'react';

function Editbook() {
  const [submit, setSubmit] = useState("");
  const [submitr, setSubmitr] = useState("");
  const [submittt, setSubmittt] = useState("");

  const submitt = () => {
    return console.log("submitting", submit, ";", submitr, ";", submittt);
  }

  const handlechange = (e) => {
    setSubmit(e.target.value);
  }

  const handlechangee = (e) => {
    setSubmitr(e.target.value);
  }

  const handlechangeee = (e) => {
    setSubmittt(e.target.value);
  }

  return (
    <>
      <div className="block items-center border-4 border-sky-500 rounded mt-7 h-[50%] w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] mx-auto bg-cover bg-center" style={{ backgroundImage: 'url("https://media.istockphoto.com/id/470721440/vector/books-seamless-pattern.jpg?s=2048x2048&w=is&k=20&c=-o40Z7Vj8uC7kqfEEd-cOjAbFxTlM_ZWeYD8swN4Mp0=")' }}>
        <div className='grid grid-cols-1 gap-4 p-5 bg-opacity-75 rounded'>
          <input
            type="text"
            placeholder="Bookname..."
            className="pl-1 pr-1 py-2 border-2 bg-transparent text-black rounded-lg w-full  border-blue-500"
            onChange={handlechange}
          />
          <input
            type="text"
            placeholder="Price..."
            className="pl-1 pr-1 py-2 border-2 bg-transparent text-black rounded-lg w-full  border-blue-500"
            onChange={handlechangee}
          />
          <input
            type="text"
            placeholder="Quantity..."
            className="pl-1 pr-1 py-2 border-2 bg-transparent text-black rounded-lg w-full  border-blue-500"
            onChange={handlechangeee}
          />
        </div>
        <div className="flex justify-center gap-2 p-4">
          <button className="border-sky-500  border-2 text-blue-gray-500 rounded px-3 py-1">
            Cancel
          </button>
          <button className=" bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded px-3 py-1" onClick={submitt}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default Editbook;
