import React from 'react';
import { ShoppingBag, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-[#2D2D2D] border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <ShoppingBag className="h-6 w-6 text-primary dark:text-primary-dark mr-2" />
              <span className="font-bold text-xl text-themeText dark:text-themeText-dark">
                Cake<span className="text-primary dark:text-primary-dark">Tools</span>
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
              Elevating the craft of baking with premium, professional-grade tools for cake artists worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-primary-dark transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-primary-dark transition-colors">
                <Phone size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary dark:hover:text-primary-dark transition-colors">
                <MapPin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-themeText dark:text-themeText-dark mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-primary dark:hover:text-primary-dark transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-primary dark:hover:text-primary-dark transition-colors">Piping Nozzles</a></li>
              <li><a href="#" className="hover:text-primary dark:hover:text-primary-dark transition-colors">Turntables</a></li>
              <li><a href="#" className="hover:text-primary dark:hover:text-primary-dark transition-colors">Silicone Molds</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-themeText dark:text-themeText-dark mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-primary dark:hover:text-primary-dark transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary dark:hover:text-primary-dark transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-primary dark:hover:text-primary-dark transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-primary dark:hover:text-primary-dark transition-colors">Returns</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-themeText dark:text-themeText-dark mb-4">Subscribe</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Get the latest updates on new products and upcoming sales.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-2 rounded-l-lg border border-gray-300 dark:border-gray-700 bg-surface dark:bg-[#1A1A1A] text-themeText dark:text-themeText-dark focus:outline-none focus:ring-1 focus:ring-primary dark:focus:ring-primary-dark"
              />
              <button type="button" className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-r-lg transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} CakeTools Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
