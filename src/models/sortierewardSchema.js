'use strict';

// DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MODELS
const SortieRewardSchema = new Schema({
  _id: String,
  // refID: String,
  // rewardName: String,
  // rarity: String,
  // tier: Number,
  // itemCount: Number,
  // probability: Number,
  // locale: String,
}, {
  strict: false,
  versionKey: false,
  timestamps: true
});

//
SortieRewardSchema.statics = {
  load: function (locale, cb) {
    this.find({
      locale: locale
    }).exec(cb);
  }
};

module.exports = mongoose.model('SortieReward', SortieRewardSchema);