angular.module('feastly.fusion', [])

.controller('FusionController', function($scope, Recipe, Recipes) {
  $scope.searchObj = {};
  $scope.searchList = [];
  Recipes.getSearches()
    .then(function(res) {
      $scope.searchObj = res.data;
    })
    .then(function() {
      for (var i = 0; i < $scope.searchObj.length; i++) {
        $scope.searchList.push($scope.searchObj[i].searchItem);
      }
      console.log($scope.searchList);
    });


  console.log('$scope.searchObj',$scope.searchObj);
  var randIndex = Math.floor(Math.random() * 100);
});
