const httpStatus = require('http-status');
const { omit } = require('lodash');
const Product = require('../models/product.model');
const getArrayFromCSV = require("../utils/csv-reader");

/**
 * Create new user
 * @public
 */

exports.create = async (req, res, next) => {
  try {
    let arrayData = await getArrayFromCSV();
    for (var i in arrayData) {
      var small = new Product(arrayData[i]);
      await small.save();
      console.log;
    }
    res.status(httpStatus.OK);
    return res.json({ status: "Saved!" })

  } catch (error) {
    res.status(httpStatus.FORBIDDEN);
    return res.json({ status: "Error!", error })
  }
};

