'use strict';

// DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MODELS
const BuildSchema = new Schema({
  _id: { type: String },
  // refID: { type: String },
  // uniqueName: String,
  // name: String,
  // codexSecret: Boolean,
  // description: String,
  // relicRewards: [],
  // tradeable: Boolean,
  // grade: String,
  // tax: String,
  // type: String,
  // locale: { type: String, required: true },
}, {
  strict: false,
  versionKey: false,
  timestamps: true
});

// 
BuildSchema.statics = {
  load: function (locale, cb) {
    this.find({
      locale: locale
    }).exec(cb);
  }
};

module.exports = mongoose.model('Build', BuildSchema);