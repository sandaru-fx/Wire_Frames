import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, List, Package, LogOut, Moon, Sun, ShoppingBag, MessageSquare } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const AdminLayout = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/signin');
  };

  const menuItems = [
    { path: '/admin/dashboard', name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { path: '/admin/categories', name: 'Manage Categories', icon: <List size={20} /> },
    { path: '/admin/products', name: 'Manage Products', icon: <Package size={20} /> },
    { path: '/admin/chats', name: 'Live Support', icon: <MessageSquare size={20} /> }
  ];

  return (
    <div className="flex h-screen bg-secondary dark:bg-[#1A1A1A] transition-colors duration-300 overflow-hidden">
      
      {/* Left Sidebar */}
      <aside className="w-64 bg-white dark:bg-[#202020] border-r border-gray-200 dark:border-gray-800 flex flex-col transition-colors duration-300 flex-shrink-0 z-20">
        <div className="h-20 flex items-center px-6 border-b border-gray-200 dark:border-gray-800">
          <Link to="/" className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-primary dark:text-primary-dark mr-2" />
            <span className="font-bold text-xl tracking-tight text-themeText dark:text-themeText-dark">
              Cake<span className="text-primary dark:text-primary-dark">Admin</span>
            </span>
          </Link>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4 px-3">Management</div>
          {menuItems.map((item) => {
            const isActive = location.pathname.includes(item.path);
            return (
              <Link 
                key={item.name} 
                to={item.path} 
                className={`flex items-center px-4 py-3 rounded-xl transition-all ${
                  isActive 
                  ? 'bg-primary/10 dark:bg-primary-dark/20 text-primary dark:text-primary-dark font-bold' 
                  : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#2D2D2D] hover:text-themeText dark:hover:text-white'
                }`}
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <button 
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-colors font-medium"
          >
            <LogOut size={20} />
            <span className="ml-3">Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        
        {/* Top Header */}
        <header className="h-20 bg-white/90 dark:bg-[#202020]/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-8 flex-shrink-0 z-10 relative">
          <h2 className="text-xl font-bold text-themeText dark:text-themeText-dark">
            {menuItems.find(m => location.pathname.includes(m.path))?.name || 'Admin'}
          </h2>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-themeText dark:text-themeText-dark"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className="flex items-center space-x-3 bg-gray-50 dark:bg-[#2D2D2D] py-1.5 pl-1.5 pr-4 rounded-full border border-gray-200 dark:border-gray-700">
              <div className="w-8 h-8 bg-[#22223B] dark:bg-primary-dark rounded-full flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
              <span className="text-sm font-semibold text-themeText dark:text-themeText-dark">Admin User</span>
            </div>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-y-auto p-8 relative z-0">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 dark:bg-primary-dark/5 rounded-full blur-3xl pointer-events-none -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
          <Outlet />
        </main>
      </div>
      
    </div>
  );
};

export default AdminLayout;
