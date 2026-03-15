/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex flex-col">
            <span className="text-xl font-bold text-rose-600 leading-tight">Chuadanga</span>
            <span className="text-xs font-medium text-gray-500 tracking-widest uppercase">Event Planner</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-rose-600 font-medium transition-colors">Home</Link>
            <Link to="/services" className="text-gray-600 hover:text-rose-600 font-medium transition-colors">Services</Link>
            <Link to="/about" className="text-gray-600 hover:text-rose-600 font-medium transition-colors">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-rose-600 font-medium transition-colors">Contact</Link>
            <a href={`tel:${BUSINESS_INFO.phones[0]}`} className="flex items-center space-x-2 bg-rose-600 text-white px-4 py-2 rounded-full hover:bg-rose-700 transition-colors">
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-rose-600 font-medium">Home</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-rose-600 font-medium">Services</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-rose-600 font-medium">About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 hover:text-rose-600 font-medium">Contact</Link>
            <div className="flex flex-col space-y-2 p-3">
              <a href={`tel:${BUSINESS_INFO.phones[0]}`} className="flex items-center justify-center space-x-2 bg-rose-600 text-white px-4 py-3 rounded-xl">
                <Phone size={18} />
                <span>Call Now</span>
              </a>
              <a href={`https://wa.me/88${BUSINESS_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-3 rounded-xl">
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
