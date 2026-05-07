import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const SignUp = () => {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary dark:bg-[#1A1A1A] px-4 py-12 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
      
      {/* Background decoration */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 dark:bg-primary-dark/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-accent/20 dark:bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full space-y-8 bg-white/70 dark:bg-[#202020]/70 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/20 dark:border-white/5 relative z-10"
      >
        <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors">
          <ArrowLeft size={16} className="mr-1" /> Back to home
        </Link>
        
        <div className="text-center">
          <div className="flex justify-center mb-2">
             <ShoppingBag className="h-12 w-12 text-primary dark:text-primary-dark" />
          </div>
          <h2 className="mt-2 text-3xl font-extrabold text-themeText dark:text-themeText-dark">
            Join CakeTools
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Create an account to start shopping premium baking tools
          </p>
        </div>
        
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Full Name</label>
              <input id="name" name="name" type="text" required 
                className="appearance-none rounded-xl relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-[#2D2D2D]/50 placeholder-gray-500 text-themeText dark:text-themeText-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                placeholder="Full Name" />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required 
                className="appearance-none rounded-xl relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-[#2D2D2D]/50 placeholder-gray-500 text-themeText dark:text-themeText-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="new-password" required 
                className="appearance-none rounded-xl relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-[#2D2D2D]/50 placeholder-gray-500 text-themeText dark:text-themeText-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                placeholder="Password" />
            </div>
          </div>

          <div>
            <Link to="/shop/home" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-primary hover:bg-opacity-90 dark:bg-primary-dark shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Create Account
            </Link>
          </div>
        </form>
        
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Already have an account?{' '}
            <Link to="/shop/home" className="font-medium text-primary dark:text-primary-dark hover:text-opacity-80 transition-colors">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
