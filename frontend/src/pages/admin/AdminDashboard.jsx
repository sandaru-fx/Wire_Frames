import React from 'react';
import { motion } from 'framer-motion';
import { useShop } from '../../context/ShopContext';
import { Package, List, DollarSign, TrendingUp, ShoppingCart } from 'lucide-react';

const AdminDashboard = () => {
  const { categories } = useShop();
  
  const totalCategories = categories.length;
  const totalProducts = categories.reduce((sum, cat) => sum + cat.products.length, 0);

  const stats = [
    { title: "Total Categories", value: totalCategories, icon: <List size={24} />, color: "bg-blue-500" },
    { title: "Total Products", value: totalProducts, icon: <Package size={24} />, color: "bg-green-500" },
    { title: "Total Orders", value: "1,245", icon: <ShoppingCart size={24} />, color: "bg-orange-500" },
    { title: "Revenue", value: "Rs. 2.4M", icon: <DollarSign size={24} />, color: "bg-purple-500" },
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-themeText dark:text-themeText-dark">Dashboard Overview</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-2">Welcome back to the CakeTools Admin Panel.</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-[#202020] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center"
          >
            <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-white ${stat.color} shadow-lg mr-4`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
              <h3 className="text-2xl font-bold text-themeText dark:text-white">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity Placeholder */}
      <div className="bg-white dark:bg-[#202020] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6">
        <div className="flex items-center justify-between mb-6 border-b border-gray-100 dark:border-gray-800 pb-4">
          <h2 className="text-lg font-bold text-themeText dark:text-white">Recent System Activity</h2>
          <button className="text-primary text-sm font-medium">View All</button>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-[#1A1A1A] rounded-xl border border-gray-100 dark:border-gray-800">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-4">
                  <TrendingUp size={18} />
                </div>
                <div>
                  <p className="font-semibold text-themeText dark:text-white text-sm">New Order #CT-{1000 + i}</p>
                  <p className="text-xs text-gray-500">2 minutes ago</p>
                </div>
              </div>
              <div className="text-sm font-bold text-green-500">+ Rs. {Math.floor(Math.random() * 5000) + 1000}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
