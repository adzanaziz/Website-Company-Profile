
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductPage from './components/ProductPage';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
