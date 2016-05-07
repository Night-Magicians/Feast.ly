var mongoose = require('mongoose');

var FavoriteSchema = new mongoose.Schema({
  favorite: {
    type: String,
    unique: true
  }
});

module.exports = mongoose.model('favorite', FavoriteSchema);
