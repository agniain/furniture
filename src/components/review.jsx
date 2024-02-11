import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StarRateIcon from '@mui/icons-material/StarRate';

const Reviews = () => {
  const reviews = [
    { name: 'Costumer 1', rate: 5, text: 'Top products, best quality', profile: <AccountCircleIcon /> },
    { name: 'Costumer 2', rate: 5, text: 'I highly recommend this company', profile: <AccountCircleIcon /> },
    { name: 'Costumer 3', rate: 4, text: 'Good service and great results', profile: <AccountCircleIcon /> },
    { name: 'Costumer 4', rate: 5, text: 'Top products, best quality', profile: <AccountCircleIcon /> },
    { name: 'Costumer 5', rate: 5, text: 'I highly recommend this company', profile: <AccountCircleIcon /> },
    { name: 'Costumer 6', rate: 5, text: 'Top products, best quality', profile: <AccountCircleIcon /> },
  ];

  const [scrollIndex, setScrollIndex] = useState(0);

  const scrollLeft = () => {
    setScrollIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const scrollRight = () => {
    setScrollIndex((prevIndex) => Math.min(prevIndex + 1, 2));
  };

  return (
    <div className="mb-10">   
        <div className="flex flex-col md:flex-row items-center justify-center pt-10 pb-5">
          <div className="md:w-2/3 mt-50 ml-10 mb-50">
            <p className="text-4xl text-amber-900 font-bold">Happy Customers</p>
            <p className="text-amber-600 mt-3">Read our happy customers' reviews</p>
          </div>
          
          <div className="md:w-1/3 ">
            <div className="mr-10 text-right">
                <button
                    className="bg-amber-900 px-2 py-1 text-white rounded hover:bg-amber-700"
                >
                    Show All
                </button>
            </div>
          </div>
        </div>
        <div className="relative flex items-center overflow-hidden py-50">
            <button
                className={`absolute inset-y-0 left-0 bg-gray-200 opacity-50 hover:opacity-75 transition duration-300 ${
                scrollIndex === 0 && 'hidden'
                }`}
                onClick={scrollLeft}
            >
                &lt;
            </button>
            <div className="flex space-x-4 overflow-x-auto">
                {reviews.slice(scrollIndex * 3, (scrollIndex + 1) * 3).map((review) => (
                    <div key={reviews.id} className="flex-none w-96 ml-10">
                        <div className="border p-2">
                        <div className="flex items-center mb-2 text-yellow-400">
                            {Array.from({ length: review.rate }, (_, i) => (
                            <StarRateIcon key={i} />
                            ))}
                        </div>
                        <p className="text-gray-600">{review.text}</p>    
                        <p className="text-lg font-semibold mt-2">{review.profile}</p>
                        <p className="text-lg font-semibold">{review.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className={`absolute inset-y-0 right-0 bg-gray-200 opacity-50 hover:opacity-75 transition duration-100 ${
                scrollIndex === 1 && 'hidden'
                }`}
                onClick={scrollRight}
            >
                &gt;
            </button>
        </div>
        <div className="flex flex-col items-center justify-center mt-20">
            <p className="text-4xl text-amber-900 font-semibold">Have Questions?</p>
            <div className="flex">
                <button className="mt-5 mb-10 py-2 bg-amber-900 text-slate-100 rounded py-2 px-4 hover:bg-amber-500">
                    Contact Us
                </button>
                <button className="ml-5 mt-5 mb-10 py-2 border border-amber-900 rounded text-amber-700 py-2 px-4 hover:bg-amber-500">
                    FAQ
                </button>
            </div>
        </div>

    </div>
  );
};

export default Reviews;
