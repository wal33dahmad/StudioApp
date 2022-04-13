import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Client from './components/ClientSec';
import Business from './components/Business';
import DigProd from './components/DigProd';
import HapClient from './components/HapClient';
import NewsLetter from './components/NewsLetter';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Client />
      <Business />
      <DigProd />
      <HapClient />
      <NewsLetter />
      <Footer />
    </>

  );
}

export default App;