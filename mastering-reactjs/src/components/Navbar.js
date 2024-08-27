// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Adziz Store</div>
        <ul className="flex space-x-6">
          <li><Link to="/" className="text-white hover:text-gray-200">Home</Link></li>
          <li><Link to="/products" className="text-white hover:text-gray-200">Products</Link></li>
          <li><Link to="/about" className="text-white hover:text-gray-200">About Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
