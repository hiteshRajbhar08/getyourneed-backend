const {
  getProducts,
  getProductById,
} = require('../controllers/productController');

const router = require('express').Router();

// /api/products
router.route('/').get(getProducts);

// /api/products/:id
router.route('/:id').get(getProductById);

module.exports = router;
