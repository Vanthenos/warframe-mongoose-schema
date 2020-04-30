'use strict';

// DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MODELS
const PromocodeSchema = new Schema({
  _id: String,
  // uniqueName: String,
  // textureLocation: String,
  // filetime: String,
  // textureUrl: String,
}, {
  strict: false,
  versionKey: false,
  timestamps: true
});

PromocodeSchema.statics = {
  load: function (id, cb) {
    this.findOne({
      _id: id
    }).exec(cb);
  }
};

module.exports = mongoose.model('Promocode', PromocodeSchema);