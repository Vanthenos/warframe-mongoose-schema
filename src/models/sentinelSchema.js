'use strict';

// DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MODELS
const SentinelSchema = new Schema({
  _id: String,
  // refID: String,
  // uniqueName: String,
  // name: String,
  // description: String,
  // longDescription: String,
  // health: Number,
  // shield: Number,
  // armor: Number,
  // stamina: Number,
  // power: Number,
  // codexSecret: Boolean,
  // locale: String,
}, {
  strict: true,
  versionKey: false,
  timestamps: true
});

//
SentinelSchema.statics = {
  load: function (locale, cb) {
    this.find({
      locale: locale
    }).exec(cb);
  }
};

module.exports = mongoose.model('Sentinel', SentinelSchema);