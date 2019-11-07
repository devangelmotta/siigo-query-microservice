const Joi = require('joi');
const User = require('../models/product.model');

module.exports = {

  // POST /v1/products
  createProduct: {
    body: {
      idCompany: Joi.string().required(),
      name: Joi.string().required(),
      description: Joi.string().min(6).max(128).required(),
      price: Joi.string().max(128),
    },
  },
};
