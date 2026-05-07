import React from 'react';
import { motion } from 'framer-motion';
import ThreeDElement from '../../components/ThreeDElement';
import { Award, Heart, MapPin, Users, Target, Lightbulb, Truck, ShieldCheck } from 'lucide-react';

const stats = [
  { id: 1, label: 'Happy Bakers', value: '5000+', icon: <Users size={24} /> },
  { id: 2, label: 'Cities Served', value: '25', icon: <MapPin size={24} /> },
  { id: 3, label: 'Quality Tools', value: '100%', icon: <Award size={24} /> },
];

const features = [
  { title: "Island-Wide Delivery", desc: "From Jaffna to Matara, we deliver your tools safely and quickly directly to your doorstep.", icon: <Truck size={32} /> },
  { title: "Authentic Quality", desc: "Sourced directly from top global manufacturers. No cheap replicas, only professional grade.", icon: <ShieldCheck size={32} /> },
  { title: "Local Support", desc: "Our Colombo team is ready to help you 24/7 with product advice and order support.", icon: <Heart size={32} /> }
];

const AboutUs = () => {
  return (
    <div className="bg-secondary dark:bg-[#1A1A1A] transition-colors duration-300 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-dark px-4 py-2 rounded-full mb-6 font-semibold">
              <span className="text-xl">🇱🇰</span>
              <span>Proudly Sri Lankan</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-themeText dark:text-themeText-dark leading-tight mb-6">
              Empowering the Bakers of <span className="text-primary dark:text-primary-dark">Sri Lanka</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Born in the heart of Colombo, CakeTools was created with a simple mission: to bring world-class, professional baking equipment to passionate Sri Lankan pastry chefs and home bakers.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We understand that the perfect cake requires not just skill, but the right tools. From precision spatulas to heavy-duty turntables, we source the best so you can bake your best. Whether you are baking a classic ribbon cake or a complex fondant masterpiece, we have you covered.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 w-full relative"
          >
            <ThreeDElement color="#D97757" />
            <div className="absolute top-4 left-4 bg-white/80 dark:bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-semibold text-themeText dark:text-white shadow-lg pointer-events-none">
              Spin the Cake! 👆
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-[#202020] p-8 rounded-3xl shadow-sm text-center flex flex-col items-center border border-gray-100 dark:border-gray-800"
            >
              <div className="p-4 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark rounded-full mb-4">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-extrabold text-themeText dark:text-themeText-dark mb-2">{stat.value}</h3>
              <p className="text-gray-500 dark:text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission & Vision (Full Width Background) */}
      <div className="bg-white dark:bg-[#202020] py-20 border-y border-gray-200 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-themeText dark:text-themeText-dark">Our Purpose</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
              We are not just selling tools; we are elevating the Sri Lankan baking industry to international standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary dark:bg-[#1A1A1A] p-10 rounded-3xl shadow-inner relative overflow-hidden transition-colors"
            >
              <Target size={48} className="text-primary dark:text-primary-dark mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-themeText dark:text-themeText-dark mb-4 relative z-10">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400 relative z-10 leading-relaxed">
                To provide every baker in Sri Lanka—from home-based entrepreneurs to five-star hotel pastry chefs—with reliable, high-quality baking equipment at fair prices. We aim to remove the barrier of poor-quality tools so creativity can flourish without limits.
              </p>
              <div className="absolute right-[-10%] bottom-[-10%] text-primary/5 dark:text-primary-dark/5">
                <Target size={200} />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-secondary dark:bg-[#1A1A1A] p-10 rounded-3xl shadow-inner relative overflow-hidden transition-colors"
            >
              <Lightbulb size={48} className="text-primary dark:text-primary-dark mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-themeText dark:text-themeText-dark mb-4 relative z-10">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400 relative z-10 leading-relaxed">
                To become the undisputed backbone of the Sri Lankan baking community. We envision a future where local cake artists consistently compete on the global stage, powered confidently by the professional tools they source from CakeTools.lk.
              </p>
              <div className="absolute right-[-10%] bottom-[-10%] text-primary/5 dark:text-primary-dark/5">
                <Lightbulb size={200} />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-themeText dark:text-themeText-dark">The CakeTools Advantage</h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Why thousands of local bakers trust us for their daily baking needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center p-8 bg-white dark:bg-[#202020] rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="mx-auto w-20 h-20 bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark flex items-center justify-center rounded-2xl mb-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-themeText dark:text-themeText-dark mb-4">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Story Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-primary to-[#ff9b7a] dark:from-primary-dark dark:to-[#cc785e] rounded-3xl p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden"
        >
          <Heart size={56} className="mx-auto mb-8 text-white/90 drop-shadow-md" />
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 drop-shadow-sm">Crafted with Love in Colombo</h2>
          <p className="text-xl text-white/95 max-w-3xl mx-auto leading-relaxed font-medium">
            Our journey started in a small kitchen in Nugegoda when we realized how hard it was to find a proper turntable. Today, whether you are running a bustling bakery in Kandy, a boutique cafe in Galle, or taking special orders from your home in Colombo — we are here to support your creative journey.
          </p>
          <div className="mt-10">
            <a href="/shop/home" className="inline-block bg-white text-primary font-bold text-lg py-4 px-10 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Start Shopping Now
            </a>
          </div>
          
          {/* Decorative Background Elements */}
          <div className="absolute top-[-20%] left-[-10%] w-80 h-80 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-80 h-80 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>
        </motion.div>
      </div>

    </div>
  );
};

export default AboutUs;
