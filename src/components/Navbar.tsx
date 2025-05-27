// Navbar Component
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-20 py-4 w-full bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-800 hover:text-gray-600 font-medium">Home</Link>
          <Link to="#" className="text-gray-500 hover:text-gray-700 font-medium">Contact</Link>
          <Link to="#" className="text-gray-500 hover:text-gray-700 font-medium">Gallery</Link>
          <Link to="#" className="text-gray-500 hover:text-gray-700 font-medium">FAQ</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white fixed top-16 left-0 right-0 z-30 border-t border-gray-200 p-4">
          <div className="flex flex-col space-y-4">
            <Link to="/"
              className="text-gray-800 hover:text-gray-600 py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link to="#"
              className="text-gray-500 hover:text-gray-700 py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link to="#"
              className="text-gray-500 hover:text-gray-700 py-2"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link to="#"
              className="text-gray-500 hover:text-gray-700 py-2"
              onClick={() => setIsOpen(false)}
            >
              FAQ
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;