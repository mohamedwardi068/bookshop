import React, { useState } from 'react';
import Modal from 'react-modal';
import Detailsbook from './detailsbook';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    width: '80%',
    height: '80%',
    padding: '0',
    transform: 'translate(-50%, -50%)',
  },
};

function Bookshow({ title, price, description, image, genre, author }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Detailsbook
          title={title}
          price={price}
          description={description}
          image={image}
          genre={genre}
          author={author}
        />
      </Modal>

      <div className="w-[300px] h-[600px] border-2 border-sky-500 rounded mt-4 ml-4">
        <div className="h-[70%] w-full pt-1 pb-0 pl-4 pr-4">
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </div>
        <br />
        <div>
          <div className="mb-2 flex items-center justify-between">
            <p className="font-medium ml-1">{title}</p>
          </div>
          <p className="font-normal opacity-75 ml-2">{description}</p>
        </div>
        <div className="pt-0 mb-0 flex items-center justify-between">
          <button
            className="bg-blue-500 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 border-blue-gray-500 text-blue-gray-500 rounded px-3 py-1 mt-1 ml-1"
            onClick={openModal}
          >
            Add to Cart
          </button>
          <p className="font-medium pr-3">{price}$</p>
        </div>
      </div>
    </>
  );
}

export default Bookshow;
