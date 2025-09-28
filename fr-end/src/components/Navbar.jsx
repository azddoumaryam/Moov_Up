import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-md text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logo_white.png"
            alt="MoovUp Logo"
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-white text-base font-normal">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <Link to="/apropos" className="hover:text-black transition-colors">À propos </Link>
          <Link to="/carrier" className="hover:text-black transition-colors">Carrier</Link>
          <Link to="/visite" className="hover:text-black transition-colors">Visitez le club</Link>
          
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/80 backdrop-blur-md flex flex-col items-center gap-6 py-6 text-lg font-medium">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/apropos" 
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400 transition-colors"
          >
            A propos du club
          </Link>
          <Link 
            to="/carrier" 
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400 transition-colors"
          >
            Carrier
          </Link>
          <Link 
            to="/visite" 
            onClick={() => setIsOpen(false)}
            className="hover:text-gray-400 transition-colors"
          >
            Visitez le club
          </Link>
        </div>
      )}
    </nav>
  );
}
