'use strict';

// DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MODELS
const RegionSchema = new Schema({
  _id: String,
  // refID: String,
  // name: String,
  // uniqueName: String,
  // systemIndex: Number,
  // systemName: String,
  // nodeType: Number,
  // masteryReq: Number,
  // missionIndex: Number,
  // factionIndex: Number,
  // minEnemyLevel: Number,
  // maxEnemyLevel: Number,
  // levelOverride: Boolean,
  // locale: String,
}, {
  strict: false,
  versionKey: false,
  timestamps: true
});

RegionSchema.statics = {
  load: function (locale, cb) {
    this.find({
      locale: locale
    }).exec(cb);
  }
};

module.exports = mongoose.model('Region', RegionSchema);