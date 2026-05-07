import React, { createContext, useContext, useState } from 'react';
import { categoryData as initialData } from '../data/categories';

const ShopContext = createContext();

export const useShop = () => {
  return useContext(ShopContext);
};

export const ShopProvider = ({ children }) => {
  const [categories, setCategories] = useState(initialData);

  // --- Category Actions ---
  const addCategory = (newCategory) => {
    setCategories([...categories, { ...newCategory, id: newCategory.name.toLowerCase().replace(/\s+/g, '-'), products: [] }]);
  };

  const updateCategory = (id, updatedData) => {
    setCategories(categories.map(cat => cat.id === id ? { ...cat, ...updatedData } : cat));
  };

  const deleteCategory = (id) => {
    setCategories(categories.filter(cat => cat.id !== id));
  };

  // --- Product Actions ---
  const addProduct = (categoryId, newProduct) => {
    setCategories(categories.map(cat => {
      if (cat.id === categoryId) {
        return { ...cat, products: [...cat.products, newProduct] };
      }
      return cat;
    }));
  };

  const updateProduct = (categoryId, productIndex, updatedProduct) => {
    setCategories(categories.map(cat => {
      if (cat.id === categoryId) {
        const newProducts = [...cat.products];
        newProducts[productIndex] = updatedProduct;
        return { ...cat, products: newProducts };
      }
      return cat;
    }));
  };

  const deleteProduct = (categoryId, productIndex) => {
    setCategories(categories.map(cat => {
      if (cat.id === categoryId) {
        const newProducts = cat.products.filter((_, idx) => idx !== productIndex);
        return { ...cat, products: newProducts };
      }
      return cat;
    }));
  };

  const value = {
    categories,
    addCategory,
    updateCategory,
    deleteCategory,
    addProduct,
    updateProduct,
    deleteProduct
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};
