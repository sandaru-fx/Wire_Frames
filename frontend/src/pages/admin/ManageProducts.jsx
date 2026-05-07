import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import { Plus, Trash2, Image as ImageIcon, Package } from 'lucide-react';

const ManageProducts = () => {
  const { categories, addProduct, deleteProduct } = useShop();
  const [selectedCatId, setSelectedCatId] = useState(categories[0]?.id || '');
  
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProductName || !newProductPrice || !selectedCatId) return;
    
    addProduct(selectedCatId, {
      name: newProductName,
      price: `Rs. ${newProductPrice}`
    });
    
    setNewProductName('');
    setNewProductPrice('');
  };

  const selectedCategory = categories.find(c => c.id === selectedCatId);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-themeText dark:text-themeText-dark">Manage Products</h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">Add or remove products from specific categories.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Add Product Form */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-[#202020] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 sticky top-6">
            <h3 className="font-bold text-lg mb-6 text-themeText dark:text-white flex items-center">
              <Plus size={20} className="mr-2 text-primary" /> Add New Product
            </h3>
            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-500 mb-1">Select Category</label>
                <select 
                  value={selectedCatId}
                  onChange={(e) => setSelectedCatId(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#1A1A1A] text-themeText dark:text-white outline-none focus:ring-2 focus:ring-primary/50"
                >
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Product Name</label>
                <input 
                  type="text" 
                  required
                  value={newProductName}
                  onChange={(e) => setNewProductName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#1A1A1A] text-themeText dark:text-white outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="e.g. 8-inch Cake Pan"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Price (Rs.)</label>
                <input 
                  type="number" 
                  required
                  value={newProductPrice}
                  onChange={(e) => setNewProductPrice(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#1A1A1A] text-themeText dark:text-white outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="2500"
                />
              </div>
              <button type="submit" className="w-full bg-primary text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-opacity-90 transition-all mt-4">
                Add Product
              </button>
            </form>
          </div>
        </div>

        {/* Product List */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-[#202020] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg text-themeText dark:text-white">
                Products in <span className="text-primary">{selectedCategory?.name}</span>
              </h3>
              <span className="bg-gray-100 dark:bg-[#2D2D2D] px-3 py-1 rounded-full text-xs font-bold text-gray-500 dark:text-gray-400">
                {selectedCategory?.products.length || 0} Total
              </span>
            </div>

            {selectedCategory?.products.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 dark:bg-[#1A1A1A] rounded-xl border border-dashed border-gray-300 dark:border-gray-700">
                <ImageIcon size={48} className="mx-auto text-gray-300 dark:text-gray-600 mb-3" />
                <p className="text-gray-500 dark:text-gray-400 font-medium">No products in this category yet.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {selectedCategory?.products.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-[#1A1A1A] rounded-xl border border-gray-100 dark:border-gray-800 hover:border-primary/30 transition-colors group">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-white dark:bg-[#2D2D2D] rounded-lg shadow-sm flex items-center justify-center mr-4 border border-gray-100 dark:border-gray-700">
                        <Package size={20} className="text-gray-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-themeText dark:text-white">{product.name}</h4>
                        <p className="text-sm font-bold text-primary dark:text-primary-dark mt-0.5">{product.price}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => deleteProduct(selectedCatId, index)}
                      className="p-2.5 bg-red-50 dark:bg-red-500/10 text-red-500 rounded-lg hover:bg-red-100 dark:hover:bg-red-500/20 transition-colors opacity-0 group-hover:opacity-100"
                      title="Delete Product"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ManageProducts;
