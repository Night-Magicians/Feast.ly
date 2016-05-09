angular.module ('feastly.favorites', [])
.controller('FavoritesController', function($scope, Recipes, Recipe) {
  $scope.favorites = {};
  //to get recipes from back end
  $scope.favorites.results = [];
  $scope.getFavs = function(){
    Recipes.getFavorites().then(function(res){
      $scope.favorites.favorite_id = res.data;
      $scope.favorites.favorite_id.forEach(function(obj){
        Recipe.showRecipe(obj.favorite).then(function(){
          $scope.showFavs(recipeViewRes);
        });
      });
    });
  };

  $scope.getFavs();

  $scope.showFavs = function(favRecipe){
        $scope.favorites.results.push({
            name: favRecipe.name,
            image: favRecipe.images[0].hostedLargeUrl,
            ingredients: favRecipe.ingredientLines,
            url: favRecipe.source.sourceRecipeUrl
          });
    };
});
