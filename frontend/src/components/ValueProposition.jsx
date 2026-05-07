import React from 'react';
import { motion } from 'framer-motion';
import { Award, Truck, ShieldCheck, Heart } from 'lucide-react';

const values = [
  {
    id: 1,
    title: 'Professional Grade',
    description: 'Tools built to withstand the rigors of a commercial bakery, available for your home.',
    icon: <Award size={32} />,
  },
  {
    id: 2,
    title: 'Fast Island-Wide Delivery',
    description: 'Get your baking supplies delivered right to your doorstep quickly and securely.',
    icon: <Truck size={32} />,
  },
  {
    id: 3,
    title: 'Quality Guaranteed',
    description: 'If you are not fully satisfied with our tools, we offer a hassle-free return policy.',
    icon: <ShieldCheck size={32} />,
  },
  {
    id: 4,
    title: 'Loved by Artists',
    description: 'Join thousands of cake artists who trust our tools to bring their visions to life.',
    icon: <Heart size={32} />,
  },
];

const ValueProposition = () => {
  return (
    <section className="py-20 bg-secondary dark:bg-[#1A1A1A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white dark:bg-[#2D2D2D] p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center p-4 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark rounded-full mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-themeText dark:text-themeText-dark mb-3">
                {value.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
