'use strict';

// DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MODELS
const PoeUrlSchema = new Schema({
  _id: String,
  // refID: String,
  // uniqueName: String,
  // name: String,
  // codexSecret: Boolean,
  // description: String,
  // locale: String,
}, {
  strict: false,
  versionKey: false,
  timestamps: true
});

PoeUrlSchema.statics = {
  load: function (category, cb) {
    this.find({
      category: category
    }).exec(cb);
  }
};

module.exports = mongoose.model('PoeUrl', PoeUrlSchema);