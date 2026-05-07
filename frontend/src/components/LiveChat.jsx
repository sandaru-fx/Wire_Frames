import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User } from 'lucide-react';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Ayubowan! Welcome to CakeTools Support. How can we help you today?", sender: "agent" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const newMsg = { id: Date.now(), text: input, sender: "user" };
    setMessages(prev => [...prev, newMsg]);
    setInput("");

    // Simulate auto-reply
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now() + 1, 
        text: "Thanks for reaching out! One of our local Colombo agents will reply to you shortly.", 
        sender: "agent" 
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 bg-primary hover:bg-opacity-90 dark:bg-primary-dark text-white rounded-full shadow-2xl flex items-center justify-center z-50 transition-colors ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open Live Chat"
      >
        <MessageCircle size={28} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 w-[350px] bg-white dark:bg-[#202020] rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col border border-gray-200 dark:border-gray-800"
            style={{ height: '550px', maxHeight: '85vh' }}
          >
            {/* Header */}
            <div className="bg-primary dark:bg-primary-dark p-4 flex justify-between items-center text-white shadow-md z-10 relative">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <User size={20} />
                  </div>
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-primary dark:border-primary-dark rounded-full"></div>
                </div>
                <div>
                  <h3 className="font-bold text-sm">CakeTools Support</h3>
                  <p className="text-xs text-white/80">Typically replies in minutes</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10">
                <X size={20} />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-[#1A1A1A] space-y-4">
              <div className="text-center text-xs text-gray-400 my-4">Today</div>
              {messages.map((msg) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={msg.id} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 text-sm shadow-sm ${
                    msg.sender === 'user' 
                      ? 'bg-primary dark:bg-primary-dark text-white rounded-2xl rounded-br-sm' 
                      : 'bg-white dark:bg-[#2D2D2D] text-themeText dark:text-gray-200 border border-gray-100 dark:border-gray-800 rounded-2xl rounded-bl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white dark:bg-[#202020] border-t border-gray-100 dark:border-gray-800 z-10 relative">
              <form onSubmit={handleSend} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-100 dark:bg-[#1A1A1A] text-themeText dark:text-white px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm border border-transparent dark:border-gray-800 transition-all"
                />
                <button 
                  type="submit"
                  disabled={!input.trim()}
                  className="p-3 bg-primary dark:bg-primary-dark text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-opacity-90 transition-all shadow-md"
                >
                  <Send size={18} className="transform translate-x-[-1px] translate-y-[1px]" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChat;
