import React from 'react';
import Swal from 'sweetalert2';

const ProductTable = ({ products, editProduct, deleteProduct }) => {
    const handleDelete = (index) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(index);
                Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
            }
        });
    };

    return (
        <table id="dataTable">
            <thead>
            <tr>
                <th>Product Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {products.map((product, index) => (
                <tr key={index}>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>
                        <button onClick={() => editProduct(index)} aria-label="Edit">
                            ✏️
                        </button>
                        <button onClick={() => handleDelete(index)} aria-label="Delete">
                            🗑️
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default ProductTable;
