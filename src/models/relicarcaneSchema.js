'use strict';

// DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MODELS
const RelicArcaneSchema = new Schema({
  _id: String,
  // refID: String,
  // uniqueName: String,
  // name: String,
  // codexSecret: Boolean,
  // description: String,
  // relicRewards: [],
  // tradeable: Boolean,
  // grade: String,
  // tax: String,
  // type: String,
  // locale: String,
}, {
  strict: false,
  versionKey: false,
  timestamps: true
});

//
RelicArcaneSchema.statics = {
  load: function (locale, cb) {
    this.find({
      locale: locale
    }).exec(cb);
  }
};

module.exports = mongoose.model('RelicArcane', RelicArcaneSchema);