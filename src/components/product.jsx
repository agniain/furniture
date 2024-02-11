import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    { name: 'Product 1', description: 'Description 1', price: 'Rp 13.700.000', imageUrl: 'image-1.png' },
    { name: 'Product 2', description: 'Description 2', price: 'Rp 19.970.000', imageUrl: 'image-2.png' },
    { name: 'Product 3', description: 'Description 3', price: 'Rp 13.120.000', imageUrl: 'image-3.png' },
    { name: 'Product 4', description: 'Description 4', price: 'Rp 19.890.000', imageUrl: 'image-4.png' },
    { name: 'Product 5', description: 'Description 5', price: 'Rp 13.900.000', imageUrl: 'image-5.png' },
    { name: 'Product 6', description: 'Description 6', price: 'Rp 19.930.000', imageUrl: 'image-1.png' },
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
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-2/3 mt-10 ml-10 mb-10">
            <p className="text-amber-600 ">Discover</p>
            <p className="text-4xl text-amber-900 font-bold">Featured</p>
            <p className="text-amber-600">explore our selection of modern furniture for your home</p>
          </div>
          
          <div className="md:w-1/3 ">
            <div className="pt-20 mr-10 text-right">
                <Link to='/products'
                    className="bg-amber-900 px-2 py-1 text-white rounded hover:bg-amber-700"
                >
                    Show All
                </Link>
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
                {products.slice(scrollIndex * 3, (scrollIndex + 1) * 3).map((product) => (
                    <div key={product.id} className="flex-none w-96 ml-10">
                        <div className="border p-2">
                            <img
                                src={`/images/${product.imageUrl}`}
                                alt={product.name}
                                className="w-full h-60 mb-2"
                            />
                            <p className="text-lg text-amber-900 font-bold">{product.name}</p>
                            <p className="text-amber-800">{product.description}</p>
                            <p className="text-lg text-amber-900 font-semibold mt-2">{product.price}</p>
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
    </div>
  );
};

export default Products;
