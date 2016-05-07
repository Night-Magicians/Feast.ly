var mongoose = require('mongoose');

var SearchHistory = new mongoose.Schema({
  history: [{
    type: string,
    unique: true
  }]
});

module.exports = mongoose.model('searchHistory', SearchHistory);
