import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from "./Images/img1.jpg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-gradient-to-r from-[#e6d8ce] to-[#d4c5bb] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo and Branding */}
          <div className="flex items-center space-x-3">
            <div className="bg-white rounded-xl p-1 shadow-lg border-2 border-[#0b46a1] w-16 h-16 flex items-center justify-center overflow-hidden">
              <img 
                src={logo} 
                alt="Ileya Savings Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="font-bold text-[#323232] text-lg sm:text-xl md:text-2xl tracking-tight">
                1447 AH ILEYA CONTRIBUTION SAVINGS
              </h1>
              <p className="text-[#5a5a5a] text-xs sm:text-sm font-light hidden sm:block">
                Secure your festive season with our savings program
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link 
              to="/" 
              className="text-[#323232] hover:text-[#0b46a1] font-medium transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-white/50"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-[#323232] hover:text-[#0b46a1] font-medium transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-white/50"
            >
              About
            </Link>
            <Link 
              to="/form" 
              className="text-[#323232] hover:text-[#0b46a1] font-medium transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-white/50"
            >
              Join Now
            </Link>
            <Link 
              to="/contact" 
              className="text-[#323232] hover:text-[#0b46a1] font-medium transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-white/50"
            >
              Contact
            </Link>
            <div className="h-6 w-px bg-[#323232]/30 mx-1"></div>
            <Link 
              to="/login" 
              className="bg-gradient-to-r from-[#0b46a1] to-[#323232] hover:from-[#09337d] hover:to-[#1a1a1a] text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Member Login
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#323232] hover:text-[#0b46a1] focus:outline-none p-2 rounded-full hover:bg-white/50"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#323232]/10 bg-white/80 backdrop-blur-sm rounded-lg mt-2 shadow-lg">
            <div className="flex flex-col space-y-3 px-4">
              <Link 
                to="/" 
                className="text-[#323232] hover:text-[#0b46a1] font-medium py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-[#323232] hover:text-[#0b46a1] font-medium py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link 
                to="/form" 
                className="text-[#323232] hover:text-[#0b46a1] font-medium py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Join Now
              </Link>
              <Link 
                to="/contact" 
                className="text-[#323232] hover:text-[#0b46a1] font-medium py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <div className="pt-2">
                <Link 
                  to="/login" 
                  className="block w-full text-center bg-gradient-to-r from-[#0b46a1] to-[#323232] hover:from-[#09337d] hover:to-[#1a1a1a] text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 shadow-md"
                  onClick={toggleMenu}
                >
                  Member Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;