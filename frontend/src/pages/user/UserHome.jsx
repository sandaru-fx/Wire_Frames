import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag, TrendingUp, Gift, Clock, ShieldCheck, Truck } from 'lucide-react';

const trendingCategories = [
  { id: 1, name: 'Silicone Molds', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  { id: 2, name: 'Piping Tips', image: 'https://images.unsplash.com/photo-1614138093223-9556eb1264c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  { id: 3, name: 'Turntables', image: 'https://images.unsplash.com/photo-1557308536-ee471ef2c390?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  { id: 4, name: 'Edible Colors', image: 'https://images.unsplash.com/photo-1563805042-7684c8e9e5cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  { id: 5, name: 'Cake Boxes', image: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
  { id: 6, name: 'Spatulas', image: 'https://images.unsplash.com/photo-1556910103-1c02745a80d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80' },
];

const featuredProducts = [
  { id: 1, name: 'Premium Offset Spatula Set', price: 'Rs. 4,500', oldPrice: 'Rs. 5,200', rating: 4.9, badge: 'Sale', image: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 2, name: 'Heavy Duty Turntable', price: 'Rs. 12,000', oldPrice: null, rating: 5.0, badge: 'Best Seller', image: 'https://images.unsplash.com/photo-1557308536-ee471ef2c390?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 3, name: 'Silicone Sphere Mold', price: 'Rs. 3,200', oldPrice: null, rating: 4.8, badge: 'New', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 4, name: 'Master Piping Tip Set (24 Pcs)', price: 'Rs. 6,500', oldPrice: null, rating: 4.7, badge: null, image: 'https://images.unsplash.com/photo-1614138093223-9556eb1264c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
];

const newArrivals = [
  { id: 5, name: 'Airbrush Compressor Kit', price: 'Rs. 28,000', rating: 4.9, image: 'https://images.unsplash.com/photo-1556910103-1c02745a80d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 6, name: 'Gold Leaf Flakes (Edible)', price: 'Rs. 2,500', rating: 4.6, image: 'https://images.unsplash.com/photo-1563805042-7684c8e9e5cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 7, name: 'Adjustable Cake Ring', price: 'Rs. 3,800', rating: 4.8, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
  { id: 8, name: 'Fondant Smoother Tool', price: 'Rs. 1,200', rating: 4.5, image: 'https://images.unsplash.com/photo-1614138093223-9556eb1264c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
];

const ProductCard = ({ product, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white dark:bg-[#202020] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-800"
  >
    <div className="h-56 overflow-hidden relative">
      <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" />
      {product.badge && (
        <div className="absolute top-3 left-3 bg-primary dark:bg-primary-dark text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
          {product.badge}
        </div>
      )}
      <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/50 backdrop-blur-md px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1 text-themeText dark:text-gray-200 shadow-sm">
        <Star size={12} className="fill-yellow-400 text-yellow-400" /> {product.rating}
      </div>
      
      {/* Quick Add Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button className="bg-white text-primary font-bold py-3 px-6 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 shadow-lg flex items-center">
          <ShoppingBag size={18} className="mr-2" /> Quick Add
        </button>
      </div>
    </div>
    <div className="p-5">
      <h3 className="font-semibold text-themeText dark:text-themeText-dark mb-1 truncate text-lg">{product.name}</h3>
      <div className="flex items-center gap-2 mt-3">
        <span className="font-bold text-xl text-primary dark:text-primary-dark">{product.price}</span>
        {product.oldPrice && (
          <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>
        )}
      </div>
    </div>
  </motion.div>
);

const UserHome = () => {
  return (
    <div className="bg-secondary dark:bg-[#1A1A1A] transition-colors duration-300 min-h-screen pb-20">
      
      {/* Welcome Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary to-[#ff9b7a] dark:from-primary-dark dark:to-[#cc785e] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between overflow-hidden relative"
        >
          <div className="relative z-10 md:w-2/3">
            <div className="inline-flex items-center space-x-2 bg-white/20 px-3 py-1 rounded-full mb-4 text-sm font-medium">
              <Gift size={16} /> <span>Special Offer for Sri Lankan Bakers</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight">Welcome back to<br />the Kitchen!</h1>
            <p className="text-lg text-white/90 mb-8 max-w-lg">Discover our new arrivals of professional grade silicone molds and piping tips. Elevate your next cake today.</p>
            <Link to="/shop/categories" className="inline-flex items-center bg-white text-primary font-bold py-4 px-8 rounded-full hover:bg-gray-100 hover:scale-105 transition-all shadow-lg">
              Shop New Arrivals <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
          {/* Decorative shapes */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-white/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/4 pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-y-1/2 pointer-events-none"></div>
        </motion.div>
      </div>

      {/* Trending Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center mb-8">
          <TrendingUp className="text-primary dark:text-primary-dark mr-3" size={28} />
          <h2 className="text-2xl font-bold text-themeText dark:text-themeText-dark">Highly Demanded Right Now</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trendingCategories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link to="/shop/categories" className="group flex flex-col items-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden shadow-md border-4 border-white dark:border-[#202020] group-hover:border-primary dark:group-hover:border-primary-dark transition-colors duration-300 mb-4 relative">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                </div>
                <span className="text-sm sm:text-base font-semibold text-themeText dark:text-gray-300 text-center group-hover:text-primary dark:group-hover:text-primary-dark transition-colors">
                  {cat.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Promo Banner Middle */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#22223B] dark:bg-[#11111E] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between"
        >
          <div className="md:w-2/3 mb-6 md:mb-0">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">Weekend Flash Sale! ⚡</h2>
            <p className="text-gray-300 text-lg">Get <span className="text-primary font-bold">20% OFF</span> on all piping nozzles and turntables. Offer ends this Sunday.</p>
          </div>
          <div className="md:w-1/3 flex justify-end">
            <button className="bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all w-full md:w-auto">
              Claim Discount
            </button>
          </div>
        </motion.div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-themeText dark:text-themeText-dark">Featured Products</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">Handpicked for professionals</p>
          </div>
          <Link to="/shop/categories" className="text-primary dark:text-primary-dark font-medium hover:underline flex items-center">
            View all <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>

      {/* New Arrivals Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex justify-between items-end mb-8 border-t border-gray-200 dark:border-gray-800 pt-10">
          <div>
            <div className="inline-block bg-accent text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide mb-2">New</div>
            <h2 className="text-2xl font-bold text-themeText dark:text-themeText-dark">Fresh Arrivals</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">The latest tools directly imported to Sri Lanka</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-200 dark:border-gray-800 pt-12">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-primary/10 dark:bg-primary-dark/10 rounded-full flex items-center justify-center text-primary dark:text-primary-dark flex-shrink-0">
              <Truck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-themeText dark:text-themeText-dark">Island-Wide Delivery</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Fast shipping anywhere in SL</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-primary/10 dark:bg-primary-dark/10 rounded-full flex items-center justify-center text-primary dark:text-primary-dark flex-shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="font-bold text-themeText dark:text-themeText-dark">Secure Payments</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">100% safe & secure checkout</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-primary/10 dark:bg-primary-dark/10 rounded-full flex items-center justify-center text-primary dark:text-primary-dark flex-shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <h4 className="font-bold text-themeText dark:text-themeText-dark">24/7 Support</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Local support from Colombo</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default UserHome;
