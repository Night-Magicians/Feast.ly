var mongoose = require('mongoose');

var SearchHistorySchema = new mongoose.Schema({
  searchItem: {
    type: String,
    unique: true
  }
});

module.exports = mongoose.model('searchHistory', SearchHistorySchema);
