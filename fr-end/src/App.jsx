import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import Carrier from './pages/Carrier';
import Footer from './components/Footer';
import Visite from "./pages/Visite";
import Apropos from './pages/Apropos'; 
import './styles/fonts.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSlider />} />
        <Route path="/apropos" element={<Apropos/>} />
        <Route path="/visite" element={<Visite />} />
        <Route path="/carrier" element={<Carrier />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
