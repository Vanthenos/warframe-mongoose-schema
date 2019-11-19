'use strict';

// DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MODELS
const ArcaneSchema = new Schema({
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
ArcaneSchema.statics = {
  load: function (locale, cb) {
    console.log("arcane sttics")

    this.find({
      locale: "EN"
    }).exec(cb);
  },

  loader: function (locale, cb) {
    console.log("arcane sttics")

    this.find({
      locale: "DE"
    }).exec(cb);
  }





};

module.exports = mongoose.model('Arcane', ArcaneSchema);