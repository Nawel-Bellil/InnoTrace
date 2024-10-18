const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productId: {
    type: String,
    required: true, // Unique identifier for the product (e.g., SKU or custom product code)
    unique: true,   // Ensures productId is unique
  },
  name: {
    type: String,
    required: true, // Name of the product (e.g., 'Car Model X')
  },
  category: {
    type: String, // e.g., 'Vehicle', 'Engine', 'Body Frame'
  },
  description: {
    type: String, // Optional: product details
  },
  createdAt: {
    type: Date,
    default: Date.now, // Timestamp when the product was added
  },
});

module.exports = mongoose.model('Product', productSchema);
