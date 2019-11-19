'use strict';

// DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MODELS
const CustomSchema = new Schema({
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

//
CustomSchema.statics = {
  load: function (locale, cb) {
    this.find({
      locale: locale
    }).exec(cb);
  }
};

module.exports = mongoose.model('Custom', CustomSchema);