angular.module('feastly.fusion', [])

.controller('FusionController', function($scope, Recipe, Recipes) {
  $scope.searchObj = {};
  $scope.searchList = [];
  $scope.fusionPair = [];
  Recipes.getSearches()
    .then(function(res) {
      $scope.searchObj = res.data;
    })
    .then(function() {
      for (var i = 0; i < $scope.searchObj.length; i++) {
        $scope.searchList.push($scope.searchObj[i].searchItem);
      }
      var randIndex1 = Math.floor(Math.random() * $scope.searchList.length);
      var randIndex2 = Math.floor(Math.random() * $scope.searchList.length);
      $scope.fusionPair.push($scope.searchList[randIndex1]);
      $scope.fusionPair.push($scope.searchList[randIndex2]);
    });

});
