const router = require('express').Router();
const { createNewOrder } = require('../controllers/orderController');
const { protect } = require('../middlewares/authMiddleware');

// /api/orders
router.route('/').post(protect, createNewOrder);

module.exports = router;
