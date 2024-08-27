
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-6 text-center text-white">
      <p>&copy; 2024 Adziz Store. All rights reserved.</p>
      <div className="mt-4">
        <a href="https://www.facebook.com" className="mx-2 text-white hover:text-gray-400">Facebook</a>
        <a href="https://www.twitter.com" className="mx-2 text-white hover:text-gray-400">Twitter</a>
        <a href="https://www.instagram.com" className="mx-2 text-white hover:text-gray-400">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
