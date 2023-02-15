const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');

/**-----------------------------------------------
 * @desc    fetch All Users Products
 * @route   /api/products
 * @method  GET
 * @access  public 
 ------------------------------------------------*/
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

/**-----------------------------------------------
 * @desc    fetch Product details
 * @route   /api/products/:id
 * @method  GET
 * @access  public 
 ------------------------------------------------*/
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({
      message: 'Product not found',
    });
  }
});

module.exports = {
  getProducts,
  getProductById,
};
