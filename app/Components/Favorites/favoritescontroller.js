angular.module ('feastly.favorites', [])
.controller('FavoritesController', function($scope, Recipes, Recipe) {

  $scope.favorites = {}

//to get recipes from back end
  $scope.favorites.results = [];
  $scope.getFavs = function(){
     Recipes.getFavorites().then(function(res){
      // console.log("++++++ What is res.data? ++++++", res.data); 
      $scope.favorites.favorite_id = res.data;
      // console.log("What is $scope.favorites.favorite_id?", $scope.favorites.favorite_id);
    $scope.favorites.favorite_id.forEach(function(obj){
          Recipe.showRecipe(obj.favorite).then(function(){
          $scope.showFavs(recipeViewRes);
        })
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
       
        console.log("What is $scope.favorites.results",  $scope.favorites.results);
        // console.log("What is $scope.favorites",  $scope.favorites);
    }

});