angular.module('search.directive', [])

.controller('search.ctrl', ['$scope', 'Recipes', '$location', 'Recipe', function($scope, Recipes, $location, Recipe) {
  $scope.userInput = {};
  $scope.list = [];

  $scope.searchRecipes = function(input){
    input.toString();
    $scope.userInput.q = input.split(" ").join('+');
    Recipes.getRecipes($scope.userInput).then(function(searchRecipe){
      $scope.list = searchRecipe.data.matches;
    });
  };
}]);
