import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Header from '../components/header-about';
import LayerAbout1 from '../components/layer-about-1';
import LayerAbout2 from '../components/layer-about-2';
import Layer3 from '../components/layer-3';

const About = () => {
    
    return (
        <>
          <Navbar />
          <Header />
          <LayerAbout1 />
          <LayerAbout2 />  
          <Layer3 />  
          <Footer />
        </>
      );
    };
    
    export default About;