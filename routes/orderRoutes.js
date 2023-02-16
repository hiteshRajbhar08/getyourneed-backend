const router = require('express').Router();
const {
  createNewOrder,
  getOrderById,
} = require('../controllers/orderController');
const { protect } = require('../middlewares/authMiddleware');

// /api/orders
router.route('/').post(protect, createNewOrder);

// /api/orders/:id
router.route('/:id').get(protect, getOrderById);

module.exports = router;
