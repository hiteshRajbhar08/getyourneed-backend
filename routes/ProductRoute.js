const router = require('express').Router();
const {
  getProducts,
  getProductById,
  createProduct,
} = require('../controllers/productController');
const { protect, admin } = require('../middlewares/authMiddleware');

// /api/products
router.route('/').get(getProducts);

// /api/products
router.route('/').post(protect, admin, createProduct);

// /api/products/:id
router.route('/:id').get(getProductById);

module.exports = router;
