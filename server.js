const express = require('express');
require('dotenv').config();
require('colors');
const cors = require('cors');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const connectDB = require('./config/db');

// connect DB
connectDB();

// routes
const productRoutes = require('./routes/ProductRoute');
const userRoutes = require('./routes/userRoute');
const orderRoutes = require('./routes/orderRoutes');

//  init app
const app = express();

//  middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes middleware
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

// error middlewares
app.use(notFound);
app.use(errorHandler);

// listen to server
const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
      .underline.bgWhite
  )
);
