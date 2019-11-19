'use strict';

// DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MODELS
const EnemySchema = new Schema({
  _id: String,
  // refID: String,
  // uniqueName: String,
  // name: String,
  // faction: String,
  // description: String,
  // longDescription: String,
  // health: Number,
  // shield: Number,
  // armor: Number,
  // codexSecret: Boolean,
  // regionBits: Number,
  // resistValues: Array,
  // resistPrefix: Array,
  // resistTexts: Array,
  // locale: String,
}, {
  strict: false,
  versionKey: false,
  timestamps: true
});

EnemySchema.statics = {
  load: function (locale, cb) {
    this.find({
      locale: locale
    }).exec(cb);
  }
};

module.exports = mongoose.model('Enemy', EnemySchema);