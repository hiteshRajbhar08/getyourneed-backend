const express = require('express');
require('dotenv').config();
require('colors');
const cors = require('cors');
const products = require('./data/products');

//  init app
const app = express();

//  middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/products', (req, res) => {
  res.send(products);
});

// listen to server
const PORT = process.env.PORT || 8000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
      .underline.bgWhite
  )
);
