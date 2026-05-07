import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, ShieldAlert } from 'lucide-react';
import { useChat } from '../context/ChatContext';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { chats, currentUser, sendMessage, blockedUsers } = useChat();
  const messagesEndRef = useRef(null);

  const userChat = chats[currentUser.id] || { messages: [] };
  const isBlocked = blockedUsers.includes(currentUser.id);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [userChat.messages, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim() || isBlocked) return;
    sendMessage(message);
    setMessage('');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="mb-4 w-96 h-[500px] bg-white dark:bg-[#202020] rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-800 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 bg-primary text-white flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <User size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Live Support</h3>
                  <p className="text-xs text-white/70">Online • We usually reply in minutes</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              <div className="text-center mb-4">
                <span className="text-[10px] text-gray-400 bg-gray-50 dark:bg-[#1A1A1A] px-2 py-1 rounded-full uppercase tracking-wider">Today</span>
              </div>
              
              {userChat.messages.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-sm text-gray-500">Hello! Ask us anything about our cake tools.</p>
                </div>
              )}

              {userChat.messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3.5 rounded-2xl text-sm ${
                    msg.sender === 'user' 
                    ? 'bg-primary text-white rounded-tr-none' 
                    : 'bg-gray-100 dark:bg-[#2D2D2D] text-themeText dark:text-white rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-[#1A1A1A]/50">
              {isBlocked ? (
                <div className="p-3 bg-red-50 dark:bg-red-500/10 rounded-xl text-center">
                  <p className="text-red-500 text-xs font-semibold flex items-center justify-center">
                    <ShieldAlert size={14} className="mr-2" />
                    You have been blocked by the administrator.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                  <input 
                    type="text" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 bg-white dark:bg-[#2D2D2D] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 text-themeText dark:text-white"
                  />
                  <button 
                    type="submit"
                    className="p-2.5 bg-primary text-white rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
                    disabled={!message.trim()}
                  >
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        {isOpen ? <X size={28} className="relative z-10" /> : <MessageCircle size={28} className="relative z-10" />}
      </motion.button>
    </div>
  );
};

export default ChatWidget;
