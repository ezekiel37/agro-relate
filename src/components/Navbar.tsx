
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-4 w-full">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
        </div>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-agrogreen-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-agrogreen-dark hover:text-agrogreen font-medium">Home</Link>
          <Link to="#" className="text-agrogreen-dark hover:text-agrogreen font-medium">Contact</Link>
          <Link to="#" className="text-agrogreen-dark hover:text-agrogreen font-medium">Gallery</Link>
          <Link to="#" className="text-agrogreen-dark hover:text-agrogreen font-medium">FAQ</Link>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white fixed top-16 left-0 right-0 z-20 border-t border-gray-200 p-4">
          <div className="flex flex-col space-y-4">
            <Link to="/" 
              className="text-agrogreen-dark hover:text-agrogreen py-2" 
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link to="#"
              className="text-agrogreen-dark hover:text-agrogreen py-2" 
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link to="#"
              className="text-agrogreen-dark hover:text-agrogreen py-2" 
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link to="#"
              className="text-agrogreen-dark hover:text-agrogreen py-2" 
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
