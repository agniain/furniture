import React from 'react';

import Navbar from '../components/navbar';
import Header from '../components/header';
import Products from '../components/product';
import Layer1 from '../components/layer-1';
import Layer2 from '../components/layer-2';
import Layer3 from '../components/layer-3';
import Reviews from '../components/review';
import Footer from '../components/footer';

const Home = () => {
  
  return (
    <>
      <Navbar />
      <Header />
      <Products />
      <Layer1 />
      <Layer2 />
      <Layer3 />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;