import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useShop } from '../../context/ShopContext';
import { Plus, Edit2, Trash2, X, Check } from 'lucide-react';

const ManageCategories = () => {
  const { categories, addCategory, deleteCategory, updateCategory } = useShop();
  const [isAdding, setIsAdding] = useState(false);
  const [newCatName, setNewCatName] = useState('');
  const [newCatImage, setNewCatImage] = useState('');
  
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newCatName.trim()) return;
    addCategory({ 
      name: newCatName, 
      image: newCatImage || 'https://images.unsplash.com/photo-1556910103-1c02745a80d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' 
    });
    setNewCatName('');
    setNewCatImage('');
    setIsAdding(false);
  };

  const startEdit = (cat) => {
    setEditingId(cat.id);
    setEditName(cat.name);
  };

  const saveEdit = (id) => {
    updateCategory(id, { name: editName });
    setEditingId(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-themeText dark:text-themeText-dark">Manage Categories</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Add, edit, or remove product categories.</p>
        </div>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="bg-primary hover:bg-opacity-90 text-white px-4 py-2 rounded-xl flex items-center shadow-md transition-all"
        >
          {isAdding ? <X size={20} className="mr-2" /> : <Plus size={20} className="mr-2" />}
          {isAdding ? 'Cancel' : 'Add Category'}
        </button>
      </div>

      {/* Add New Form */}
      {isAdding && (
        <motion.form 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-white dark:bg-[#202020] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 mb-8 overflow-hidden"
          onSubmit={handleAdd}
        >
          <h3 className="font-bold text-lg mb-4 text-themeText dark:text-white">Create New Category</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">Category Name</label>
              <input 
                type="text" 
                required
                value={newCatName}
                onChange={(e) => setNewCatName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#1A1A1A] text-themeText dark:text-white outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="e.g. Mixing Tools"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Image URL (Optional)</label>
              <input 
                type="text" 
                value={newCatImage}
                onChange={(e) => setNewCatImage(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#1A1A1A] text-themeText dark:text-white outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="https://..."
              />
            </div>
          </div>
          <button type="submit" className="bg-primary text-white px-6 py-2 rounded-lg font-medium shadow-sm hover:bg-opacity-90">
            Save Category
          </button>
        </motion.form>
      )}

      {/* Categories Table */}
      <div className="bg-white dark:bg-[#202020] rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-[#2D2D2D] border-b border-gray-100 dark:border-gray-800">
                <th className="p-4 font-semibold text-gray-600 dark:text-gray-300">Image</th>
                <th className="p-4 font-semibold text-gray-600 dark:text-gray-300">Category Name</th>
                <th className="p-4 font-semibold text-gray-600 dark:text-gray-300">Products Count</th>
                <th className="p-4 font-semibold text-gray-600 dark:text-gray-300 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat) => (
                <tr key={cat.id} className="border-b border-gray-100 dark:border-gray-800 last:border-0 hover:bg-gray-50 dark:hover:bg-[#1A1A1A] transition-colors">
                  <td className="p-4">
                    <img src={cat.image} alt={cat.name} className="w-12 h-12 rounded-lg object-cover" />
                  </td>
                  <td className="p-4">
                    {editingId === cat.id ? (
                      <input 
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        className="px-3 py-1 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2D2D2D] text-themeText dark:text-white outline-none"
                      />
                    ) : (
                      <span className="font-medium text-themeText dark:text-white">{cat.name}</span>
                    )}
                  </td>
                  <td className="p-4 text-gray-500 dark:text-gray-400">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-md font-bold text-xs">
                      {cat.products.length}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex justify-end space-x-2">
                      {editingId === cat.id ? (
                        <button onClick={() => saveEdit(cat.id)} className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200">
                          <Check size={16} />
                        </button>
                      ) : (
                        <button onClick={() => startEdit(cat)} className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200">
                          <Edit2 size={16} />
                        </button>
                      )}
                      <button onClick={() => deleteCategory(cat.id)} className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageCategories;
