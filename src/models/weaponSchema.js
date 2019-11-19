'use strict';

// DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MODELS
const WeaponSchema = new Schema({
  _id: String,
  // refID: String,
  // name: String,
  // uniqueName: String,
  // codexSecret: Boolean,
  // secondsPerShot: Number,
  // damagePerShot: Array,
  // magazineSize: Number,
  // reloadTime: Number,
  // totalDamage: Number,
  // damagePerSecond: Number,
  // trigger: String,
  // description: String,
  // accuracy: Number,
  // criticalChance: Number,
  // criticalMultiplier: Number,
  // procChance: Number,
  // fireRate: Number,
  // chargeAttack: Number,
  // spinAttack: Number,
  // leapAttack: Number,
  // wallAttack: Number,
  // slot: Number,
  // noise: String,
  // sentinel: Boolean,
  // masteryReq: Number,
  // omegaAttenuation: Number,
  // locale: String,
}, {
  strict: false,
  versionKey: false,
  timestamps: true
});

//
WeaponSchema.statics = {
  load: function (locale, cb) {
    this.find({
      locale: locale
    }).exec(cb);
  }
};

module.exports = mongoose.model('Weapon', WeaponSchema);