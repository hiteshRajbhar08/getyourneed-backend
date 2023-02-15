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

//  init app
const app = express();

//  middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes middleware
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

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
