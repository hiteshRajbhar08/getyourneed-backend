const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');
const Order = require('../models/orderModel');

/**-----------------------------------------------
 * @desc    create new order
 * @route   /api/orders
 * @method  POST
 * @access  private 
 ------------------------------------------------*/
const createNewOrder = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    return res.status(400).json({
      message: 'Cart is empty',
    });
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json({
      message: 'New Order Created',
      order: createdOrder,
    });
  }
});

/**-----------------------------------------------
 * @desc    get order by id
 * @route   /api/orders/:id
 * @method  GET
 * @access  private 
 ------------------------------------------------*/
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404).json({
      message: 'Order not Found',
    });
  }
});

module.exports = {
  createNewOrder,
  getOrderById,
};
