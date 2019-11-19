'use strict';

// DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MODELS
const FlavourSchema = new Schema({
  _id: String,
  // refID: String,
  // uniqueName: String,
  // name: String,
  // description: String,
  // longDescription: String,
  // codexSecret: Boolean,
  // hexColours: Array,
  // locale: String,
}, {
  strict: false,
  versionKey: false,
  timestamps: true
});

FlavourSchema.statics = {
  load: function (locale, cb) {
    this.find({
      locale: locale
    }).exec(cb);
  }
};

module.exports = mongoose.model('Flavour', FlavourSchema);