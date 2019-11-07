const httpStatus = require('http-status');
const { setTask } = require("../handle-queued/publiher")


/**
 * Create new user
 * @public
 */

exports.create = async (req, res, next) => {
  var { text } = req.body;
  var regex = new RegExp(text, "i")
    , query = { description: regex };
  await setTask(query);

};

