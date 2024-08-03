import React from 'react';

const ProductForm = ({ addProduct, currentProduct, setCurrentProduct, clearForm, editIndex }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateInputs(currentProduct)) {
            alert('All fields must be filled correctly!');
            return;
        }
        addProduct(currentProduct);
    };

    const validateInputs = (product) => {
        const { name, description, price, quantity } = product;
        return (
            /^[a-zA-Z0-9\s]+$/.test(name) &&
            description.trim() !== '' &&
            !isNaN(price) &&
            parseFloat(price) > 0 &&
            !isNaN(quantity) &&
            parseInt(quantity) > 0
        );
    };

    return (
        <form id="crudForm" onSubmit={handleSubmit}>
            <input
                type="text"
                id="productName"
                placeholder="Product Name"
                value={currentProduct.name}
                onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
            />
            <input
                type="text"
                id="productDescription"
                placeholder="Product Description"
                value={currentProduct.description}
                onChange={(e) => setCurrentProduct({ ...currentProduct, description: e.target.value })}
            />
            <input
                type="number"
                id="productPrice"
                placeholder="Price"
                value={currentProduct.price}
                onChange={(e) => setCurrentProduct({ ...currentProduct, price: e.target.value })}
            />
            <input
                type="number"
                id="productQuantity"
                placeholder="Quantity"
                value={currentProduct.quantity}
                onChange={(e) => setCurrentProduct({ ...currentProduct, quantity: e.target.value })}
            />
            <button type="submit">{editIndex === -1 ? 'Create' : 'Update'}</button>
            <button type="button" onClick={clearForm}>Clear</button>
        </form>
    );
};

export default ProductForm;
