import React from 'react';
import { ShoppingCart } from '@mui/icons-material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import logo from '../logos/Logo-1.png';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-4 md:px-10 w-full">
      <div className="flex items-center space-x-4">
        <img
                  src={logo}
                  alt="logo"
                  className="mt-1"
                  style={{ height: "auto" }}
                />
        <Link to='/' className='text-amber-800 text-lg mt-4 ml-10'>
          Home
        </Link>
        <Link to='/about' className='text-amber-800 text-lg mt-4'>
          About
        </Link>
        <Link to='/products' className='text-amber-800 text-lg mt-4'>
          Products
        </Link>
        <Link to='/contact' className='text-amber-800 text-lg mt-4'>
          Contact
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link to='/' className='uppercase text-amber-800'>
          <SearchIcon />
        </Link>
        <Link to='/' className='uppercase text-amber-800'>
          <FavoriteBorderIcon />
        </Link>
        <Link to='/' className='uppercase text-amber-800'>
          <ShoppingCart />
        </Link>
        <button
        className="bg-amber-800 text-white py-1 px-2 rounded hover:bg-amber-700"
        >
          <PermIdentityIcon/>Sign in
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
