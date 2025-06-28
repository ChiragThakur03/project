import React, { useState } from 'react';
import { Code } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isHover, setIsHover] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseEnter = () => setIsHover(true);
  const handleMouseLeave = () => setIsHover(false);
  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <div className="flex justify-between items-center p-3 mt-2 mx-5 rounded-t-lg bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 shadow-lg dark:shadow-xl transition-colors duration-300 relative">
      
      {/* Left side - Logo and Navigation Links */}
      <div className="flex items-center gap-8">
        {/* Logo */}
        <div className="cursor-pointer flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <Code className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            EduTrack360
          </span>
        </div>

        {/* Desktop Navigation Links - Right next to logo */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Features', 'Pricing', 'Contact'].map((item, index) => (
            <p
              key={index}
              className="text-base text-gray-600 dark:text-gray-300 cursor-pointer hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium"
              onClick={handleLinkClick}
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* Right Side - Desktop Actions and Mobile Menu Toggle */}
      <div className="flex items-center gap-4">
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className={`px-6 py-3 text-white rounded-xl text-base font-semibold transition-all duration-300 shadow-lg ${
              isHover
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-purple-500/25 transform -translate-y-0.5'
                : 'bg-gradient-to-r from-purple-500 to-blue-500'
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Request a Demo
          </button>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex flex-col justify-center items-center w-10 h-10 cursor-pointer z-50" onClick={handleMenuToggle}>
          <span
            className={`block w-7 h-0.5 my-1 rounded-sm transition-all duration-300 ${
              menuOpen ? 'translate-y-2 rotate-45 bg-purple-600 dark:bg-purple-400' : 'bg-gray-700 dark:bg-gray-300'
            }`}
          />
          <span
            className={`block w-7 h-0.5 my-1 rounded-sm transition-all duration-300 ${
              menuOpen ? 'opacity-0' : 'bg-gray-700 dark:bg-gray-300'
            }`}
          />
          <span
            className={`block w-7 h-0.5 my-1 rounded-sm transition-all duration-300 ${
              menuOpen ? '-translate-y-2 -rotate-45 bg-purple-600 dark:bg-purple-400' : 'bg-gray-700 dark:bg-gray-300'
            }`}
          />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black/20 dark:bg-black/40 z-40 backdrop-blur-sm"
            onClick={handleMenuToggle}
          />
          <div className="absolute top-full left-0 right-0 mt-1 mx-5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 rounded-b-lg shadow-lg z-50 transition-all duration-300">
            <div className="flex flex-col p-5 space-y-4">
              {/* Mobile Navigation Links */}
              {['Home', 'Features', 'Pricing', 'Contact'].map((item, index) => (
                <p
                  key={index}
                  className="text-base text-gray-600 dark:text-gray-300 cursor-pointer hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200 font-medium py-2"
                  onClick={handleLinkClick}
                >
                  {item}
                </p>
              ))}

              {/* Mobile Actions */}
              <div className="flex flex-col gap-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                <button
                  className={`w-full py-3 px-6 text-white rounded-xl text-base font-semibold transition-all duration-300 shadow-lg ${
                    isHover
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 shadow-purple-500/25'
                      : 'bg-gradient-to-r from-purple-500 to-blue-500'
                  }`}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Request a Demo
                </button>
                <div className="flex justify-center">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;