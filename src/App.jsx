// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <div id="contact">
        {/* You can add a contact form or section here */}
      </div>
      <Footer />
    </>
  );
}

export default App;

