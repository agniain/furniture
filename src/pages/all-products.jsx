import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Header from '../components/header-products';

const AllProducts = () => {
    const productsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);

    const products = [
        { name: 'Product 1', description: 'Description 1', price: 'Rp 13.700.000', imageUrl: 'image-1.png' },
        { name: 'Product 2', description: 'Description 2', price: 'Rp 19.970.000', imageUrl: 'image-2.png' },
        { name: 'Product 3', description: 'Description 3', price: 'Rp 13.120.000', imageUrl: 'image-3.png' },
        { name: 'Product 4', description: 'Description 4', price: 'Rp 19.890.000', imageUrl: 'image-4.png' },
        { name: 'Product 5', description: 'Description 5', price: 'Rp 13.900.000', imageUrl: 'image-5.png' },
        { name: 'Product 6', description: 'Description 6', price: 'Rp 19.930.000', imageUrl: 'image-1.png' },
        { name: 'Product 7', description: 'Description 7', price: 'Rp 13.700.000', imageUrl: 'image-1.png' },
        { name: 'Product 8', description: 'Description 8', price: 'Rp 19.970.000', imageUrl: 'image-2.png' },
        { name: 'Product 9', description: 'Description 9', price: 'Rp 13.120.000', imageUrl: 'image-3.png' },
        { name: 'Product 10', description: 'Description 10', price: 'Rp 19.890.000', imageUrl: 'image-4.png' },
        { name: 'Product 11', description: 'Description 11', price: 'Rp 13.900.000', imageUrl: 'image-5.png' },
        { name: 'Product 12', description: 'Description 12', price: 'Rp 19.930.000', imageUrl: 'image-1.png' },
        { name: 'Product 13', description: 'Description 13', price: 'Rp 19.890.000', imageUrl: 'image-4.png' },
        { name: 'Product 14', description: 'Description 14', price: 'Rp 13.900.000', imageUrl: 'image-5.png' },
        { name: 'Product 15', description: 'Description 15', price: 'Rp 19.930.000', imageUrl: 'image-2.png' },
        { name: 'Product 16', description: 'Description 16', price: 'Rp 19.890.000', imageUrl: 'image-3.png' },
        { name: 'Product 17', description: 'Description 17', price: 'Rp 13.900.000', imageUrl: 'image-5.png' },
        { name: 'Product 18', description: 'Description 18', price: 'Rp 19.930.000', imageUrl: 'image-1.png' },
    ];

    const maxPages = Math.ceil(products.length / productsPerPage);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= maxPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`mx-1 py-1 px-4 ${i === currentPage ? 'bg-amber-900 text-white' : 'bg-amber-50 border border-amber-900'}`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, maxPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * productsPerPage + 1;
  const endIndex = Math.min(currentPage * productsPerPage, products.length);
  const totalProducts = products.length;

  return (  
    <div>
      <Navbar />
      <Header />
      <div className="flex flex-col justify-center items-center my-4">
        <div className="mb-4 text-amber-900">
          Showing {startIndex} - {endIndex} of {totalProducts} products
        </div>
      <div className="flex flex-wrap justify-center">
        {products
          .slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)
          .map((product) => (
            <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-2">
              <div className="border p-2 ">
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
      <div className="flex justify-center my-4">
          <button onClick={handlePreviousPage} className="mx-1 py-1 px-3 bg-amber-900 text-white ">
            Prev
          </button>
        {renderPageNumbers()}
          <button onClick={handleNextPage} className="mx-1 py-1 px-3 bg-amber-900 text-white">
            Next
          </button>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProducts;
