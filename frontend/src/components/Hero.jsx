import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-secondary dark:bg-[#1A1A1A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-1/2 lg:pb-28 xl:pb-32 pt-20">
          <motion.main 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <div className="sm:text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl tracking-tight font-extrabold text-themeText dark:text-themeText-dark sm:text-5xl md:text-6xl"
              >
                <span className="block xl:inline">Elevate Your</span>{' '}
                <span className="block text-primary dark:text-primary-dark">Baking Craft</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Discover premium, professional-grade tools for cake artists. From precision spatulas to smooth turntables, we have everything you need to create your next masterpiece.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              >
                <div className="rounded-md shadow">
                  <Link to="/shop/home" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-opacity-90 transition-all md:py-4 md:text-lg dark:bg-primary-dark">
                    Explore Tools
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link to="/signup" className="w-full flex items-center justify-center px-8 py-3 border-2 border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary hover:text-white transition-all md:py-4 md:text-lg dark:border-primary-dark dark:text-primary-dark dark:hover:bg-primary-dark dark:hover:text-white">
                    Join Now
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.main>
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2"
      >
        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full relative overflow-hidden flex items-center justify-center rounded-l-3xl shadow-2xl mt-8 lg:mt-0 lg:py-8 lg:pr-8">
          <img
            className="w-full h-full object-cover rounded-3xl lg:rounded-l-3xl lg:rounded-r-none"
            src="/hero-image.png"
            alt="Premium Cake Tools"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden absolute inset-0 flex-col items-center justify-center bg-surface dark:bg-[#2D2D2D] text-gray-400">
             <span>Hero Image Loading...</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
