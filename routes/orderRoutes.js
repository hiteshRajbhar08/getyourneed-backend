const router = require('express').Router();
const {
  createNewOrder,
  getOrderById,
  updateOrderToPaid,
} = require('../controllers/orderController');
const { protect } = require('../middlewares/authMiddleware');

// /api/orders
router.route('/').post(protect, createNewOrder);

// /api/orders/:id
router.route('/:id').get(protect, getOrderById);

// /api/orders/:id/pay
router.route('/:id/pay').put(protect, updateOrderToPaid);

module.exports = router;
