import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Star } from 'lucide-react';
import { useShop } from '../../context/ShopContext';

const CategoryProducts = () => {
  const { id } = useParams();
  const { categories } = useShop();
  const category = categories.find(c => c.id === id);

  if (!category) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-secondary dark:bg-[#1A1A1A]">
        <h2 className="text-2xl font-bold text-themeText dark:text-white mb-4">Category not found</h2>
        <Link to="/shop/categories" className="text-primary hover:underline flex items-center">
          <ArrowLeft size={16} className="mr-2" /> Back to Categories
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-secondary dark:bg-[#1A1A1A] py-16 transition-colors duration-300 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back Button */}
        <Link to="/shop/categories" className="inline-flex items-center text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-dark transition-colors mb-10 font-medium">
          <ArrowLeft size={20} className="mr-2" /> Back to All Categories
        </Link>

        {/* Header */}
        <div className="mb-12 flex items-end justify-between border-b border-gray-200 dark:border-gray-800 pb-8">
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-4xl font-extrabold text-themeText dark:text-themeText-dark"
            >
              {category.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-lg text-gray-500 dark:text-gray-400"
            >
              Showing all {category.products.length} professional tools in this category
            </motion.p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {category.products.map((product, index) => (
             <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white dark:bg-[#202020] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-800 flex flex-col"
            >
              <div className="h-56 bg-gray-100 dark:bg-[#2D2D2D] relative flex items-center justify-center overflow-hidden">
                {/* Fallback pattern/color instead of separate images for every product */}
                <div className="absolute inset-0 opacity-30">
                  <img src={category.image} alt="Category Background" className="w-full h-full object-cover filter blur-sm transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="relative z-10 w-24 h-24 bg-white/90 dark:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-primary dark:text-primary-dark shadow-lg">
                  <ShoppingBag size={36} />
                </div>
                
                {/* Quick Add Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <button className="bg-white text-primary font-bold py-3 px-8 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 shadow-xl flex items-center">
                    <ShoppingBag size={18} className="mr-2" /> Quick Add
                  </button>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-bold text-themeText dark:text-themeText-dark mb-2 text-lg">{product.name}</h3>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">(12)</span>
                </div>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                  <span className="font-extrabold text-2xl text-primary dark:text-primary-dark">{product.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CategoryProducts;
