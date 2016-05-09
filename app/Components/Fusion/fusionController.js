angular.module('feastly.fusion', [])

.controller('FusionController', function($scope, $http, Recipe, Recipes) {
  $scope.searchObj = {};
  $scope.searchList = [];
  $scope.fusionPair = [];
  $scope.fusionRecipe = {};
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
      console.log($scope.fusionPair);
      var searchPair = $scope.fusionPair.join(' ');
      console.log('searchPair',searchPair);
      return $http({
            method: 'GET',
            url: 'http://api.yummly.com/v1/api/recipes?_app_id=85328aaa&_app_key=9b9c3f69de268c05cd19da7b5bea7a42&q='+ searchPair + ''
        }).then(function(res) {
          $scope.fusionRecipe = res.data.matches[0];
          console.log($scope.fusionRecipe);
      });
    });

});
