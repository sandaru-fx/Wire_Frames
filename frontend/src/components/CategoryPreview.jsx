import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Professional Molds',
    description: 'Silicone and metal molds for perfect shapes every time.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Precision Piping',
    description: 'Master intricate designs with our stainless steel nozzles.',
    image: 'https://images.unsplash.com/photo-1614138093223-9556eb1264c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Smooth Turntables',
    description: 'Heavy-duty revolving stands for flawless frosting.',
    image: 'https://images.unsplash.com/photo-1557308536-ee471ef2c390?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const CategoryPreview = () => {
  return (
    <section className="py-20 bg-white dark:bg-[#202020] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold text-themeText dark:text-themeText-dark sm:text-4xl"
          >
            Curated For Excellence
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400"
          >
            Explore our most popular categories trusted by top pastry chefs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-80">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {category.description}
                  </p>
                  <div className="flex items-center text-primary dark:text-primary-dark font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    Shop Category <ArrowRight size={18} className="ml-2" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryPreview;
