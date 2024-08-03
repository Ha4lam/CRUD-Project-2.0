// src/App.js
import React, { useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductTable from './components/ProductTable';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({ name: '', description: '', price: '', quantity: '' });
  const [editIndex, setEditIndex] = useState(-1);

  const addProduct = (product) => {
    if (editIndex === -1) {
      setProducts([...products, product]);
    } else {
      const updatedProducts = [...products];
      updatedProducts[editIndex] = product;
      setProducts(updatedProducts);
      setEditIndex(-1);
    }
    clearForm();
  };

  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const editProduct = (index) => {
    setCurrentProduct(products[index]);
    setEditIndex(index);
  };

  const clearForm = () => {
    setCurrentProduct({ name: '', description: '', price: '', quantity: '' });
  };

  return (
      <div className="container">
        <h1>CRUD Application</h1>
        <ProductForm
            addProduct={addProduct}
            currentProduct={currentProduct}
            setCurrentProduct={setCurrentProduct}
            clearForm={clearForm}
            editIndex={editIndex}
        />
        {products.length === 0 ? (
            <div id="warningMessage">No data available</div>
        ) : (
            <ProductTable
                products={products}
                editProduct={editProduct}
                deleteProduct={deleteProduct}
            />
        )}
      </div>
  );
};

export default App;
