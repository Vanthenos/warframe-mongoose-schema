'use strict';

// DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MODELS
const GearSchema = new Schema({
  _id: String,
  // refID: String,
  // uniqueName: String,
  // name: String,
  // description: String,
  // longDescription: String,
  // pid: String,
  // parentName: String,
  // codexSecret: Boolean,
  // locale: String,
}, {
  strict: false,
  versionKey: false,
  timestamps: true
});

GearSchema.statics = {
  load: function (locale, cb) {
    this.find({
      locale: locale
    }).exec(cb);
  }
};

module.exports = mongoose.model('Gear', GearSchema);