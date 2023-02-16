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

/**-----------------------------------------------
 * @desc     create product  (only admin)
 * @route   /api/products
 * @method  POST
 * @access  private
 ------------------------------------------------*/
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/p1.jpg',
    brand: 'Sample brand',
    category: 'Sample category',
    countInStock: 0,
    rating: 0,
    numReviews: 0,
    description: 'Sample description',
  });

  const createdProduct = await product.save();
  res.status(201).json({
    message: 'Product Created',
    product: createdProduct,
  });
});

module.exports = {
  getProducts,
  getProductById,
  createProduct,
};
