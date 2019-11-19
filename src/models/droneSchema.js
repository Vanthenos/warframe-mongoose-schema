'use strict';

// DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MODELS
const DroneSchema = new Schema({
  _id: String,
  // refID: String,
  // uniqueName: String,
  // name: String,
  // description: String,
  // longDescription: String,
  // binCount: Number,
  // binCapacity: Number,
  // fillRate: Number,
  // durability: Number,
  // repairRate: Number,
  // codexSecret: Boolean,
  // capacityMultiplier: Array,
  // specialities: Array,
  // locale: String,
}, {
  strict: false,
  versionKey: false,
  timestamps: true
});

//
DroneSchema.statics = {
  load: function (locale, cb) {
    this.find({
      locale: locale
    }).exec(cb);
  }
};

module.exports = mongoose.model('Drone', DroneSchema);