import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, MeshDistortMaterial, Environment } from '@react-three/drei';

const FloatingShape = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron ref={meshRef} args={[1, 0]} scale={2}>
        <MeshDistortMaterial color="#4A5759" attach="material" distort={0.2} speed={2} roughness={0.1} metalness={0.9} />
      </Icosahedron>
    </Float>
  );
};

const ContactUs = () => {
  return (
    <div className="bg-secondary dark:bg-[#1A1A1A] py-16 transition-colors duration-300 min-h-screen relative overflow-hidden">
      
      {/* Background 3D Canvas (Abstract floating shape in the background) */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <FloatingShape />
          <Environment preset="city" />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-extrabold text-themeText dark:text-themeText-dark"
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Whether you have a question about our tools, need support with your order, or just want to say ayubowan, we're here for you.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/3 space-y-8"
          >
            <div className="bg-white/80 dark:bg-[#202020]/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-white/20 dark:border-white/5">
              <h3 className="text-2xl font-bold text-themeText dark:text-themeText-dark mb-6 border-b border-gray-200 dark:border-gray-800 pb-4">Contact Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 dark:bg-primary-dark/10 rounded-xl text-primary dark:text-primary-dark">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-themeText dark:text-themeText-dark">Our Store</h4>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">123 Galle Road,<br />Kollupitiya, Colombo 03,<br />Sri Lanka</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 dark:bg-primary-dark/10 rounded-xl text-primary dark:text-primary-dark">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-themeText dark:text-themeText-dark">Phone</h4>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">+94 77 123 4567<br />+94 11 234 5678</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 dark:bg-primary-dark/10 rounded-xl text-primary dark:text-primary-dark">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-themeText dark:text-themeText-dark">Email</h4>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">hello@caketools.lk<br />support@caketools.lk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 dark:bg-primary-dark/10 rounded-xl text-primary dark:text-primary-dark">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-themeText dark:text-themeText-dark">Working Hours</h4>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Mon - Sat: 9:00 AM - 6:00 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:w-2/3"
          >
            <div className="bg-white/70 dark:bg-[#202020]/70 backdrop-blur-2xl p-8 md:p-12 rounded-3xl shadow-2xl border border-white/30 dark:border-white/5 relative">
              <h3 className="text-3xl font-bold text-themeText dark:text-themeText-dark mb-8">Send us a message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                    <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-[#2D2D2D]/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-themeText dark:text-white" placeholder="Nimal" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                    <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-[#2D2D2D]/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-themeText dark:text-white" placeholder="Perera" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                    <input type="email" className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-[#2D2D2D]/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-themeText dark:text-white" placeholder="nimal@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-[#2D2D2D]/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-themeText dark:text-white" placeholder="077 123 4567" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Message</label>
                  <textarea rows="5" className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-[#2D2D2D]/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none text-themeText dark:text-white" placeholder="How can we help you today?"></textarea>
                </div>

                <button type="button" className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-primary hover:bg-opacity-90 dark:bg-primary-dark text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactUs;
