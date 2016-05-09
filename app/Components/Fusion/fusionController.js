angular.module('feastly.fusion', [])

.controller('FusionController', function($scope, $http, Recipe, Recipes) {
  $scope.searchObj = {};
  $scope.searchList = [];
  $scope.fusionPair = [];
  $scope.fusionRecipe = {};
  $scope.fusionRecipeid = '';

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

      var searchPair = $scope.fusionPair.join(' ');
      return $http({
            method: 'GET',
            url: 'http://api.yummly.com/v1/api/recipes?_app_id=85328aaa&_app_key=9b9c3f69de268c05cd19da7b5bea7a42&q='+ searchPair + ''
        }).then(function(res) {
          $scope.fusionRecipeid = res.data.matches[0].id;
          return $http({
            method: 'GET',
            url: 'http://api.yummly.com/v1/api/recipe/' + $scope.fusionRecipeid + '?_app_id=85328aaa&_app_key=9b9c3f69de268c05cd19da7b5bea7a42'
          }).then(function(res) {
            $scope.fusionRecipe = res.data;
            console.log("What is $scope.fushionRecipe", $scope.fusionRecipe);
          });
        });
    });

});
