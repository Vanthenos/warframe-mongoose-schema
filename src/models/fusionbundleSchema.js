'use strict';

// DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MODELS
const FusionBundleSchema = new Schema({
  _id: String,
  // refID: String,
  // uniqueName: String,
  // description: String,
  // longDescription: String,
  // codexSecret: Boolean,
  // fusionPoints: Number,
  // locale: String,
}, {
  strict: false,
  versionKey: false,
  timestamps: true
});

FusionBundleSchema.statics = {
  load: function (locale, cb) {
    this.find({
      locale: locale
    }).exec(cb);
  }
};

module.exports = mongoose.model('FusionBundle', FusionBundleSchema);