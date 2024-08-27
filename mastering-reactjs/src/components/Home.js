// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-16 px-8">
        <h1 className="text-5xl font-bold text-blue-600 mb-6">Welcome to SmartPath</h1>
        <p className="text-lg text-gray-700 mb-8">Your solution for all things tech. We bring you the best products at the best prices.</p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700">
          Explore Products
        </button>
      </div>
    </div>
  );
};

export default Home;
