import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, Shield, User } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const SignIn = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [role, setRole] = useState('customer'); // 'customer' or 'admin'

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === 'admin') {
      navigate('/admin/dashboard');
    } else {
      navigate('/shop/home');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary dark:bg-[#1A1A1A] px-4 py-12 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300">
      
      {/* Background decoration */}
      <div className="absolute top-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-primary/10 dark:bg-primary-dark/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full space-y-8 bg-white/80 dark:bg-[#202020]/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/40 dark:border-white/10 relative z-10"
      >
        <Link to="/" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors">
          <ArrowLeft size={16} className="mr-1" /> Back to home
        </Link>
        
        <div className="text-center">
          <div className="flex justify-center mb-4">
             <ShoppingBag className="h-14 w-14 text-primary dark:text-primary-dark" />
          </div>
          <h2 className="text-3xl font-extrabold text-themeText dark:text-themeText-dark">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Sign in to continue to CakeTools
          </p>
        </div>

        {/* Role Toggle */}
        <div className="flex p-1 bg-gray-100 dark:bg-[#1A1A1A] rounded-xl mb-6">
          <button
            onClick={() => setRole('customer')}
            className={`flex-1 flex justify-center items-center py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${role === 'customer' ? 'bg-white dark:bg-[#2D2D2D] text-primary dark:text-primary-dark shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-themeText dark:hover:text-white'}`}
          >
            <User size={16} className="mr-2" /> Customer
          </button>
          <button
            onClick={() => setRole('admin')}
            className={`flex-1 flex justify-center items-center py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${role === 'admin' ? 'bg-white dark:bg-[#2D2D2D] text-primary dark:text-primary-dark shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-themeText dark:hover:text-white'}`}
          >
            <Shield size={16} className="mr-2" /> Admin
          </button>
        </div>
        
        <form className="space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={role}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-4">
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <input id="email-address" name="email" type="email" required 
                    className="appearance-none rounded-xl relative block w-full px-5 py-4 border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-[#2D2D2D]/50 placeholder-gray-500 text-themeText dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                    placeholder={role === 'admin' ? "Admin Email" : "Customer Email"} />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">Password</label>
                  <input id="password" name="password" type="password" required 
                    className="appearance-none rounded-xl relative block w-full px-5 py-4 border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-[#2D2D2D]/50 placeholder-gray-500 text-themeText dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                    placeholder="Password" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-primary dark:text-primary-dark hover:text-opacity-80 transition-colors">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button type="submit" className={`group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-bold rounded-xl text-white shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${role === 'admin' ? 'bg-[#22223B] hover:bg-[#4A4E69] focus:ring-[#4A4E69] dark:bg-[#4A4E69]' : 'bg-primary hover:bg-opacity-90 focus:ring-primary dark:bg-primary-dark'}`}>
              Sign in as {role === 'admin' ? 'Administrator' : 'Customer'}
            </button>
          </div>
        </form>
        
        {role === 'customer' && (
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{' '}
              <Link to="/signup" className="font-medium text-primary dark:text-primary-dark hover:text-opacity-80 transition-colors">
                Sign up
              </Link>
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default SignIn;
