import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Partners from './pages/Partners';
import GDPRPolicy from './pages/GDPRPolicy';
import Exchange from './pages/Exchange';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/gdpr" element={<GDPRPolicy />} />
        <Route path="/exchange" element={<Exchange />} />
      </Routes>
      <CookieConsent />
      <Footer />
    </div>
  );
}

export default App;