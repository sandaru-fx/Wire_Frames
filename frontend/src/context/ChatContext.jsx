import React, { createContext, useContext, useState, useEffect } from 'react';

const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

export const ChatProvider = ({ children }) => {
  // Structure: { userId: { name: '', email: '', messages: [], status: 'active' | 'blocked' } }
  const [chats, setChats] = useState({
    'user-1': {
      id: 'user-1',
      name: 'Amila Perera',
      email: 'amila@gmail.com',
      messages: [
        { id: 1, sender: 'user', text: 'Hi, do you have 10-inch cake boards?', timestamp: new Date(Date.now() - 3600000).toISOString() },
        { id: 2, sender: 'admin', text: 'Hello! Yes, we have them in silver and gold.', timestamp: new Date(Date.now() - 3500000).toISOString() }
      ],
      status: 'active'
    },
    'user-2': {
      id: 'user-2',
      name: 'Nimali Silva',
      email: 'nimali@outlook.com',
      messages: [
        { id: 1, sender: 'user', text: 'Is the delivery free for Kandy?', timestamp: new Date(Date.now() - 7200000).toISOString() }
      ],
      status: 'active'
    }
  });

  const [currentUser, setCurrentUser] = useState({
    id: 'guest-' + Math.random().toString(36).substr(2, 9),
    name: 'Guest User',
    email: 'guest@example.com'
  });

  const [blockedUsers, setBlockedUsers] = useState([]);

  // Send message from User side
  const sendMessage = (text) => {
    if (blockedUsers.includes(currentUser.id)) return;

    const newMessage = {
      id: Date.now(),
      sender: 'user',
      text,
      timestamp: new Date().toISOString()
    };

    setChats(prev => {
      const userChat = prev[currentUser.id] || {
        id: currentUser.id,
        name: currentUser.name,
        email: currentUser.email,
        messages: [],
        status: 'active'
      };

      return {
        ...prev,
        [currentUser.id]: {
          ...userChat,
          messages: [...userChat.messages, newMessage]
        }
      };
    });

    // Mock admin auto-reply for demo
    if (text.toLowerCase().includes('hello') || text.toLowerCase().includes('hi')) {
      setTimeout(() => {
        sendAdminReply(currentUser.id, "Hello! How can we help you today?");
      }, 1500);
    }
  };

  // Send message from Admin side
  const sendAdminReply = (userId, text) => {
    const newMessage = {
      id: Date.now(),
      sender: 'admin',
      text,
      timestamp: new Date().toISOString()
    };

    setChats(prev => ({
      ...prev,
      [userId]: {
        ...prev[userId],
        messages: [...prev[userId].messages, newMessage]
      }
    }));
  };

  const blockUser = (userId) => {
    setBlockedUsers(prev => [...prev, userId]);
    setChats(prev => ({
      ...prev,
      [userId]: { ...prev[userId], status: 'blocked' }
    }));
  };

  const unblockUser = (userId) => {
    setBlockedUsers(prev => prev.filter(id => id !== userId));
    setChats(prev => ({
      ...prev,
      [userId]: { ...prev[userId], status: 'active' }
    }));
  };

  const value = {
    chats,
    currentUser,
    setCurrentUser,
    sendMessage,
    sendAdminReply,
    blockUser,
    unblockUser,
    blockedUsers
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};
