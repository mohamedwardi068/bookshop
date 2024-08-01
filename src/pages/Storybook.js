import React, {  useState } from 'react';

import Imagescroll from '../component/imagescroll'; 
import { useapi } from '../context/apiContext';


const BookListt = () => {
   
    const {response} = useapi()
     
     const [currentIndex, setCurrentIndex] = useState(0);
    const nextIndex = (currentIndex - 1 + response.length) % response.length; 
    const prevIndex = (currentIndex + 1) % response.length; 
    console.log("fff",nextIndex)
    return (
        <div className="flex flex-col items-center w-full mt-6 mb-9">
            <div className="flex justify-center mt-2.5">
            <Imagescroll
                url={response[currentIndex]?.avatar||''}
               
                prevavatar={response[prevIndex]?.avatar} 
                nextavatar={response[nextIndex]?.avatar||''} 
            />
                {response.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-4 h-4 rounded-full bg-black mx-1 cursor-pointer border-none ${
                            currentIndex === index ? 'bg-gray-700' : ''
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default BookListt;
