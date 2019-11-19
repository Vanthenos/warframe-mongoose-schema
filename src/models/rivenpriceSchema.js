'use strict';

// DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MODELS
const RivenPriceSchema = new Schema({
  _id: String,
}, {
  strict: false,
  versionKey: false,
  timestamps: true
});

//
RivenPriceSchema.statics = {
  load: function (platform, cb) {
    this.find({
      platform: platform
    }).exec(cb);
  }
};

module.exports = mongoose.model('RivenPrice', RivenPriceSchema);