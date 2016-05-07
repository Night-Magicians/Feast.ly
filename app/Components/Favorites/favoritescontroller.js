angular.module ('feastly.favorites', [])
.controller('FavoritesController', function($scope) {

  $scope.favorites = {}

//to get recipes from back end
  $scope.getFavs = function(){
     Recipes.getFavorites().then(function(res){
      $scope.favorites.data = res.data;
     });
  }

$scope.getFavs();
});