import React from 'react';

const calculateDiscountPercentage = (originalPrice, salePrice) => {
    const discount = originalPrice - salePrice;
    const discountPercentage = Math.round((discount / originalPrice) * 100);
    return discountPercentage;
};

const Imagescroll = ({ url, originalPrice, salePrice, prevUrl, nextUrl }) => {
    const discountPercentage = calculateDiscountPercentage(originalPrice, salePrice);

    return (
        <div className="relative max-w-xl mx-auto">
            <div className="w-full h-auto mb-2.5 flex justify-center items-center relative">
                {prevUrl && (
                    <img
                        src={prevUrl}
                        alt="Previous Product"
                        className="max-w-full max-h-full object-contain opacity-25 absolute top-0 left-0"
                        style={{ transform: 'translateX(-110%)' }} // Adjust position as needed
                    />
                )}
                <img src={url} alt="Product" className="max-w-full max-h-full object-contain" />
                {nextUrl && (
                    <img
                        src={nextUrl}
                        alt="Next Product"
                        className="max-w-full max-h-full object-contain opacity-25 absolute top-0 right-0"
                        style={{ transform: 'translateX(110%)' }} // Adjust position as needed
                    />
                )}
                <div className="absolute bottom-2.5 right-2.5 bg-yellow-400 text-black px-3 py-2 rounded-lg font-bold text-lg flex flex-col items-center">
                    <span className="line-through mr-1">${originalPrice}</span>
                    <span className="text-red-600 font-bold">${salePrice}</span>
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex justify-center items-center text-xs absolute top-[-0.9375rem] left-[-0.9375rem]">
                        {discountPercentage}%
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Imagescroll;
