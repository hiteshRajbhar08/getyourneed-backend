const router = require('express').Router();
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
} = require('../controllers/productController');
const { protect, admin } = require('../middlewares/authMiddleware');

// /api/products
router.route('/').get(getProducts).post(protect, admin, createProduct);

// /api/products/:id
router.route('/:id').get(getProductById).put(protect, admin, updateProduct);

module.exports = router;
