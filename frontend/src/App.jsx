import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ShopProvider } from './context/ShopContext';
import { ChatProvider } from './context/ChatContext';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/auth/SignUp';
import SignIn from './pages/auth/SignIn';
import UserLayout from './layouts/UserLayout';
import UserHome from './pages/user/UserHome';
import Categories from './pages/user/Categories';
import CategoryProducts from './pages/user/CategoryProducts';
import AboutUs from './pages/user/AboutUs';
import ContactUs from './pages/user/ContactUs';

import AdminLayout from './layouts/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageCategories from './pages/admin/ManageCategories';
import ManageProducts from './pages/admin/ManageProducts';
import ManageChats from './pages/admin/ManageChats';

function App() {
  return (
    <ThemeProvider>
      <ShopProvider>
        <ChatProvider>
          <BrowserRouter>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />

              {/* User Side Routes */}
            <Route path="/shop" element={<UserLayout />}>
              <Route path="home" element={<UserHome />} />
              <Route path="categories" element={<Categories />} />
              <Route path="category/:id" element={<CategoryProducts />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="contact" element={<ContactUs />} />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="categories" element={<ManageCategories />} />
              <Route path="products" element={<ManageProducts />} />
              <Route path="chats" element={<ManageChats />} />
            </Route>
            </Routes>
          </BrowserRouter>
        </ChatProvider>
      </ShopProvider>
    </ThemeProvider>
  );
}

export default App;
