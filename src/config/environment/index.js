const _ = require('lodash');
const path = require('path');
require('dotenv').config();

const config = {
  // MongoDB connection options
  adminUI: {
    root: path.normalize(__dirname + '/../../admin/dist'),
    index: path.normalize(__dirname + '/../../admin/dist/index.html')
  },
};
const env = process.env.NODE_ENV || 'development';
module.exports = _.merge(config, require(`./${env}.js`) || {});
