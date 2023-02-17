const router = require('express').Router();
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
} = require('../controllers/productController');
const { protect, admin } = require('../middlewares/authMiddleware');

// /api/products
router.route('/').get(getProducts).post(protect, admin, createProduct);

// api/products/:id/review
router.route('/:id/reviews').post(protect, createProductReview);

// /api/products/:id
router
  .route('/:id')
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

module.exports = router;
