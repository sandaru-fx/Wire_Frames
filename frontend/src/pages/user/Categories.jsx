import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';

const Categories = () => {
  const { categories } = useShop();
  return (
    <div className="bg-secondary dark:bg-[#1A1A1A] py-16 transition-colors duration-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-themeText dark:text-themeText-dark"
          >
            Shop by Category
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Explore our comprehensive range of professional baking equipment.
          </motion.p>
        </div>

        {/* Uniform 3x3 Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-3xl overflow-hidden group shadow-md hover:shadow-2xl transition-all duration-500 aspect-square border border-gray-100 dark:border-gray-800"
            >
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10 group-hover:from-primary/90 group-hover:via-primary/60 transition-colors duration-500"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end h-full">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 leading-tight drop-shadow-md">{cat.name}</h3>
                    <p className="text-white/80 font-medium bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-sm inline-block">
                      {cat.products.length} Products
                    </p>
                  </div>
                  <Link 
                    to={`/shop/category/${cat.id}`}
                    className="bg-white text-primary p-4 rounded-full hover:bg-gray-100 hover:scale-110 transform translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer shadow-xl flex-shrink-0"
                  >
                    <ArrowRight size={24} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Categories;
