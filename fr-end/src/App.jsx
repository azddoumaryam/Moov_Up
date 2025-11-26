import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesSection from './components/ServicesSection';
import Carrier from './pages/Carrier';
import Visite from "./pages/Visite";
import Apropos from './pages/Apropos';
import Abonnements from './pages/Abonnements';
import Planning from './pages/Planning';

// pages for each service
import SalleDeSport from './pages/SalleDeSport';
import PiscineAquagym from './pages/PiscineAquagym';
import BilanCorporel from './pages/BilanCorporel';
import Coaching from './pages/Coaching';
import Cafeteria from './pages/Cafeteria';
import Boutique from './pages/Boutique';

import './styles/fonts.css';

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* overview / grid of services */}
          <Route path="/services" element={<ServicesSection />} />

          {/* individual service pages */}
          <Route path="/services/salle-de-sport" element={<SalleDeSport />} />
          <Route path="/services/piscine-aquagym" element={<PiscineAquagym />} />
          <Route path="/services/bilan-corporel" element={<BilanCorporel />} />
          <Route path="/services/coaching" element={<Coaching />} />
          <Route path="/services/cafeteria" element={<Cafeteria />} />
          <Route path="/services/boutique" element={<Boutique />} />

          {/* other pages */}
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/visite" element={<Visite />} />
          <Route path="/carrier" element={<Carrier />} />
          <Route path="/abonnements" element={<Abonnements />} />
          <Route path="/planning" element={<Planning/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
