import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo from '../logos/Logo-2.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="p-4 mt-8 w-full bg-amber-950 flex justify-between items-center px-10 w-full">
        <div className="ml-10">
          <img
            src={logo}
            alt="logo"
            className="mt-1"
            style={{ height: "auto" }}
          />
          <p className="text-white mt-3"><LocationOnIcon />Office</p>
          <p className="text-white">Bandung, Indonesia</p>       
        </div>
        <div className="flex space-x-4">
          <div className="text-white flex flex-col space-y-4">
            <Link to='/'>Home</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Products</Link>
            <Link to='/'>Contact</Link> 
          </div>
          <div className="text-white flex flex-col space-y-4">
            <Link to='/'>Help</Link>
            <Link to='/'>Payment Methods</Link>
            <Link to='/'>Privacy Policy</Link>
          </div>          
        </div>
    </footer>
  )
}

export default Footer;