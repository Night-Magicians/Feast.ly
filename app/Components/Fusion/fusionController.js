angular.module('feastly.fusion', [])

.controller('FusionController', function($scope, Recipe, Recipes) {
  $scope.searchList = [];
  Recipes.getSearches()
    .then(function(res) {
      $scope.searchList = res.data;
      console.log($scope.searchList);
    });
  var randIndex = Math.floor(Math.random() * 100);
});
