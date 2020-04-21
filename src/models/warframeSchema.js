'use strict';

// DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MODELS
const WarframeSchema = new Schema({
  _id: String,
  refID: String,
  uniqueName: String,
  name: String,
  pid: String,
  parentName: String,
  description: String,
  longDescription: String,
  health: Number,
  shield: Number,
  armor: Number,
  stamina: Number,
  power: Number,
  codexSecret: Boolean,
  passiveDescription: String,
  abilities: Object,
  locale: String,
}, {
  strict: false,
  versionKey: false,
  timestamps: true
});

// 
WarframeSchema.statics = {
  load: function (locale, cb) {
    this.find({
      locale: locale
    }).exec(cb);
  }
};

module.exports = mongoose.model('Warframe', WarframeSchema);