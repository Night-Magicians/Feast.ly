angular.module ('feastly.favorites', [])
.controller('FavoritesController', function($scope, Recipes) {

  $scope.favorites = {}

//to get recipes from back end
  $scope.getFavs = function(){
     Recipes.getFavorites().then(function(res){
      console.log("++++++ What is res.data? ++++++", res.data); 
      $scope.favorites.data = res.data;
     });
  }

$scope.getFavs();
});