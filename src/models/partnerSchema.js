'use strict';

// DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MODELS
const PartnerSchema = new Schema({
  _id: String,
  // refID: String,
  // uniqueName: String,
  // name: String,
  // codexSecret: Boolean,
  // description: String,
  // locale: String,
}, {
  strict: false,
  versionKey: false,
  timestamps: true
});

PartnerSchema.statics = {
  load: function (_id, cb) {
    this.find({
      _id: id
    }).exec(cb);
  }
};

module.exports = mongoose.model('Partner', PartnerSchema);