import React from 'react';
import { Moon, Sun, ShoppingBag } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-secondary/80 dark:bg-[#1A1A1A]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <ShoppingBag className="h-8 w-8 text-primary dark:text-primary-dark mr-2" />
            <span className="font-bold text-2xl tracking-tight text-themeText dark:text-themeText-dark">
              Cake<span className="text-primary dark:text-primary-dark">Tools</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-themeText dark:text-themeText-dark hover:text-primary dark:hover:text-primary-dark font-medium transition-colors">Home</a>
            <a href="#" className="text-themeText dark:text-themeText-dark hover:text-primary dark:hover:text-primary-dark font-medium transition-colors">Shop</a>
            <a href="#" className="text-themeText dark:text-themeText-dark hover:text-primary dark:hover:text-primary-dark font-medium transition-colors">About</a>
            <a href="#" className="text-themeText dark:text-themeText-dark hover:text-primary dark:hover:text-primary-dark font-medium transition-colors">Contact</a>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-6">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-themeText dark:text-themeText-dark"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/signin" className="text-themeText dark:text-themeText-dark font-medium hover:text-primary dark:hover:text-primary-dark transition-colors">
                Sign In
              </Link>
              <Link to="/signup" className="btn-primary inline-block">
                Sign Up
              </Link>
            </div>

            {/* Mobile menu button (placeholder) */}
            <div className="md:hidden flex items-center">
              <button className="text-themeText dark:text-themeText-dark hover:text-primary dark:hover:text-primary-dark focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
