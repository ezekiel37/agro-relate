
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-agrogreen-dark text-xl mb-4">AgroRelate</h3>
            <p className="text-gray-600 text-sm">
              Connecting Farmers with transparent and profitable financing
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-agrogreen-dark mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-600 hover:text-agrogreen transition-colors text-sm">About Us</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-agrogreen transition-colors text-sm">For Farmers</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-agrogreen transition-colors text-sm">For Investors</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-agrogreen transition-colors text-sm">How It Works</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-agrogreen-dark mb-4">Contact</h3>
            <p className="text-gray-600 text-sm mb-2">Contact us: agrorelate93@gmail.com</p>
            <p className="text-gray-600 text-sm">@ +123 456 789</p>
          </div>
          
          <div>
            <h3 className="font-bold text-agrogreen-dark mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-600 hover:text-agrogreen transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>2025 AgroRelate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
