'use strict';

// DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MODELS
const ReleaseDateSchema = new Schema({
  _id: String,
  uniqueName: String,
  name: String,
  releasedAt: Date
}, {
  strict: true,
  versionKey: false,
  timestamps: true
});

ReleaseDateSchema.statics = {
  load: function (platform, cb) {
    this.find({
      platform: platform
    }).exec(cb);
  },
  date: function (id, cb) {
    this.find({
      _id: id
    }).exec(cb);
  }
};

module.exports = mongoose.model('ReleaseDate', ReleaseDateSchema);