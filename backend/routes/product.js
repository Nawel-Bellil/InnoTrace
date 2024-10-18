const express = require('express');
const router = express.Router();
const product = require('../controllers/product');

// Create a new product
router.post('/', product.createProduct);

// Get all products
router.get('/', product.getProducts);

// Get a product by ID
router.get('/:id', product.getProductById);

// Update a product by ID
router.put('/:id', product.updateProduct);

// Delete a product by ID
router.delete('/:id', product.deleteProduct);

module.exports = router;
