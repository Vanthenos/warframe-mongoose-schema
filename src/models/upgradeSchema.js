'use strict';

// DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MODELS
const UpgradeSchema = new Schema({
  _id: String,
  // refID: String,
  // uniqueName: String,
  // name: String,
  // description: Array,
  // polarity: String,
  // rarity: String,
  // baseDrain: Number,
  // fusionLimit: Number,
  // type: String,
  // upgradeEntries: Array,
  // availableChallenges: Array,
  // subtype: String,
  // codexSecret: false,
  // locale: String,
}, {
  strict: false,
  versionKey: false,
  timestamps: true
});

//
UpgradeSchema.statics = {
  load: function (locale, cb) {
    this.find({
      locale: locale
    }).exec(cb);
  }
};

module.exports = mongoose.model('Upgrade', UpgradeSchema);