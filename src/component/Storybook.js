import React, { useState } from 'react';
import { images } from '../db/promotiondb';
import Imagescroll from './imagescroll'; 

const BookListt = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextIndex = (currentIndex - 1 + images.length) % images.length; 
    const prevIndex = (currentIndex + 1) % images.length; 
    return (
        <div className="flex flex-col items-center w-full">
            <Imagescroll
                url={images[currentIndex].url}
                originalPrice={images[currentIndex].originalPrice}
                salePrice={images[currentIndex].salePrice}
                prevUrl={images[prevIndex].url} 
                nextUrl={images[nextIndex].url} 
            />
            <div className="flex justify-center mt-2.5">
                {images.map((_, index) => (
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
