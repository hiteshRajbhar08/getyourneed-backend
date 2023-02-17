const Product = require('../models/productModel');
const asyncHandler = require('express-async-handler');

/**-----------------------------------------------
 * @desc    fetch All Users Products
 * @route   /api/products
 * @method  GET
 * @access  public 
 ------------------------------------------------*/
const getProducts = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};

  const products = await Product.find({ ...keyword });
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

/**-----------------------------------------------
 * @desc     update product  (only admin)
 * @route   /api/products/:id
 * @method  PUT
 * @access  private
 ------------------------------------------------*/
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.status(200).json({
      message: 'Product Updated Successfully',
      product: updatedProduct,
    });
  } else {
    res.status(404).json({
      message: 'Product not found',
    });
  }
});

/**-----------------------------------------------
 * @desc     delete product  (only admin)
 * @route   /api/products/:id
 * @method  DELETE
 * @access  private
 ------------------------------------------------*/
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: 'Product removed' });
  } else {
    res.status(404).json({
      message: 'Product not found',
    });
  }
});

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
