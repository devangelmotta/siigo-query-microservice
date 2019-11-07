const mongoose = require('mongoose');
const httpStatus = require('http-status');
const { omitBy, isNil } = require('lodash');
const bcrypt = require('bcryptjs');
const moment = require('moment-timezone');
const jwt = require('jwt-simple');
const uuidv4 = require('uuid/v4');
const APIError = require('../utils/APIError');
const { env, jwtSecret, jwtExpirationInterval } = require('../../config/vars');

/**
 * User Schema
 * @private
 */
const productSchema = new mongoose.Schema({
  idCompany: {
    type: String,

  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 128,
    trim: true
  },
  price: {
    type: String,
    maxlength: 128,
    trim: true
  }
}, {
  timestamps: true
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */
productSchema.pre('save', async function save(next) {
  try {
    return next();
  } catch (error) {
    return next(error);
  }
});

/**
 * Methods
 */
productSchema.method({
  transform() {
    const transformed = {};
    const fields = ['id', 'idCompany', 'name', 'description', 'price', 'createdAt'];

    fields.forEach((field) => {
      transformed[field] = this[field];
    });

    return transformed;
  },
});




/**
 * @typedef Product
 */
module.exports = mongoose.model('Products', productSchema);
