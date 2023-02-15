const router = require('express').Router();
const {
  getProducts,
  getProductById,
} = require('../controllers/productController');

// /api/products
router.route('/').get(getProducts);

// /api/products/:id
router.route('/:id').get(getProductById);

module.exports = router;
