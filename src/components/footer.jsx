import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo from '../logos/Logo-2.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="p-4 mt-8 bg-amber-950 flex flex-col lg:flex-row justify-between items-center lg:px-10">
        <div className="lg:ml-10 mb-6 lg:mb-0 text-center lg:text-left">
          <img
            src={logo}
            alt="logo"
            className="mt-1"
            style={{ height: "auto" }}
          />
          <p className="text-white mt-3"><LocationOnIcon />Office</p>
          <p className="text-white">Bandung, Indonesia</p>       
        </div>
        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 text-white">
          <div className="flex flex-col space-y-4">
            <Link to='/'>Home</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Products</Link>
            <Link to='/'>Contact</Link> 
          </div>
          <div className="flex flex-col space-y-4">
            <Link to='/'>Help</Link>
            <Link to='/'>Payment Methods</Link>
            <Link to='/'>Privacy Policy</Link>
          </div>          
        </div>
    </footer>
  )
}

export default Footer;