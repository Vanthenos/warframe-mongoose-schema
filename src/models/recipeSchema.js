'use strict';

// DEPENDENCIES
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// MODELS
const RecipeSchema = new Schema({
  _id: String,
  // refID: String,
  // uniqueName: String,
  // rid: String,
  // resultType: String,
  // buildPrice: Number,
  // buildTime: Number,
  // skipBuildTimePrice: Number,
  // consumeOnUse: Boolean,
  // num: Number,
  // codexSecret: Boolean,
  // alwaysAvailable: Boolean,
  // visibility: String,
  // ingredients: Array,
  // secretIngredients: Array,
  // locale: String,
}, {
  strict: false,
  versionKey: false,
  timestamps: true
});

RecipeSchema.statics = {
  load: function (locale, cb) {
    this.find({
      locale: locale
    }).exec(cb);
  }
};

module.exports = mongoose.model('Recipe', RecipeSchema);