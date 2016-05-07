var mongoose = require('mongoose');

var SearchHistory = new mongoose.Schema({
  item: {
    type: string,
    unique: true
  }
});

module.exports = mongoose.model('searchHistory', SearchHistory);
