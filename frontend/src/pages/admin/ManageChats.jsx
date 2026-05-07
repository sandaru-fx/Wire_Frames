import React, { useState, useEffect, useRef } from 'react';
import { useChat } from '../../context/ChatContext';
import { MessageSquare, Send, User, ShieldAlert, CheckCircle, Trash2, Search, MoreVertical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ManageChats = () => {
  const { chats, sendAdminReply, blockUser, unblockUser, blockedUsers } = useChat();
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const messagesEndRef = useRef(null);

  const activeChats = Object.values(chats).filter(chat => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    chat.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedChat = selectedUserId ? chats[selectedUserId] : null;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [selectedChat?.messages]);

  const handleSendReply = (e) => {
    e.preventDefault();
    if (!replyText.trim() || !selectedUserId) return;
    sendAdminReply(selectedUserId, replyText);
    setReplyText('');
  };

  return (
    <div className="h-[calc(100vh-160px)] flex bg-white dark:bg-[#202020] rounded-3xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-800">
      
      {/* Sidebar - Chat List */}
      <div className="w-80 border-r border-gray-100 dark:border-gray-800 flex flex-col">
        <div className="p-6 border-b border-gray-100 dark:border-gray-800">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search customers..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-[#1A1A1A] border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/50 outline-none"
            />
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {activeChats.map(chat => (
            <button
              key={chat.id}
              onClick={() => setSelectedUserId(chat.id)}
              className={`w-full p-4 flex items-center space-x-4 transition-all hover:bg-gray-50 dark:hover:bg-[#2D2D2D] ${selectedUserId === chat.id ? 'bg-primary/5 dark:bg-primary-dark/10 border-l-4 border-primary' : 'border-l-4 border-transparent'}`}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gray-100 dark:bg-[#333] rounded-full flex items-center justify-center text-primary font-bold">
                  {chat.name.charAt(0)}
                </div>
                <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white dark:border-[#202020] ${chat.status === 'blocked' ? 'bg-red-500' : 'bg-green-500'}`}></div>
              </div>
              <div className="flex-1 text-left min-w-0">
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-themeText dark:text-white truncate">{chat.name}</h4>
                  <span className="text-[10px] text-gray-400">
                    {chat.messages.length > 0 && new Date(chat.messages[chat.messages.length - 1].timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
                <p className="text-xs text-gray-500 truncate mt-0.5">
                  {chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].text : 'No messages yet'}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-50/30 dark:bg-[#1A1A1A]/30">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-6 bg-white dark:bg-[#202020] border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  {selectedChat.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-themeText dark:text-white">{selectedChat.name}</h3>
                  <p className="text-xs text-gray-500">{selectedChat.email} • {selectedChat.status === 'blocked' ? <span className="text-red-500 font-semibold uppercase">Blocked</span> : <span className="text-green-500 font-semibold uppercase">Active</span>}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {selectedChat.status === 'blocked' ? (
                  <button 
                    onClick={() => unblockUser(selectedChat.id)}
                    className="flex items-center space-x-2 px-4 py-2 bg-green-500/10 text-green-500 rounded-xl text-sm font-bold hover:bg-green-500/20 transition-all"
                  >
                    <CheckCircle size={16} />
                    <span>Unblock User</span>
                  </button>
                ) : (
                  <button 
                    onClick={() => blockUser(selectedChat.id)}
                    className="flex items-center space-x-2 px-4 py-2 bg-red-500/10 text-red-500 rounded-xl text-sm font-bold hover:bg-red-500/20 transition-all"
                  >
                    <ShieldAlert size={16} />
                    <span>Block User</span>
                  </button>
                )}
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6">
              <AnimatePresence initial={false}>
                {selectedChat.messages.map((msg, idx) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className={`flex ${msg.sender === 'admin' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[70%] p-4 rounded-2xl shadow-sm ${
                      msg.sender === 'admin' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-white dark:bg-[#2D2D2D] text-themeText dark:text-white rounded-tl-none border border-gray-100 dark:border-gray-800'
                    }`}>
                      <p className="text-sm leading-relaxed">{msg.text}</p>
                      <p className={`text-[10px] mt-2 ${msg.sender === 'admin' ? 'text-white/70' : 'text-gray-400'}`}>
                        {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-6 bg-white dark:bg-[#202020] border-t border-gray-100 dark:border-gray-800">
              {selectedChat.status === 'blocked' ? (
                <div className="p-4 bg-red-50 dark:bg-red-500/10 rounded-xl text-center">
                  <p className="text-red-500 text-sm font-medium flex items-center justify-center">
                    <ShieldAlert size={16} className="mr-2" />
                    This user is blocked. Unblock them to send messages.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSendReply} className="flex items-center space-x-4">
                  <input 
                    type="text" 
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder="Type your reply..."
                    className="flex-1 px-6 py-3.5 bg-gray-50 dark:bg-[#1A1A1A] border-none rounded-2xl outline-none focus:ring-2 focus:ring-primary/50 text-themeText dark:text-white"
                  />
                  <button 
                    type="submit"
                    className="p-3.5 bg-primary text-white rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all"
                  >
                    <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
            <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-6">
              <MessageSquare size={40} className="text-primary/30" />
            </div>
            <h3 className="text-xl font-bold text-themeText dark:text-white mb-2">Customer Live Chat</h3>
            <p className="text-gray-500 max-w-sm">Select a customer from the left to view their messages and provide real-time assistance.</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default ManageChats;
