angular.module('search.directive', [])

.controller('search.ctrl', ['$scope', 'Recipes', '$location', 'Recipe', function($scope, Recipes, $location, Recipe) {
  $scope.userInput = {};
  $scope.list;

  $scope.searchRecipes = function(input){
    input.toString();
    $scope.userInput['q'] = input.split(" ").join('+');
    // console.log('this is the query:', $scope.userInput)
    Recipes.getRecipes($scope.userInput).then(function(searchRecipe){
        console.log('searchRecipe:',searchRecipe)
         $scope.list = searchRecipe.data.matches;
          console.log('results inside searchdirective.js:', $scope.list)

        // return searchRecipe;
        // // Look into this later
        // if($location.current.url !== '/results'){
        //   // console.log("Inside if Statement", $location.current.url)
        //   $location.path('/results');
        // } else {
        //   // console.log("no!!!!!!!!!!!")
        // $location.path($location.current, {}, {reload: true});          
        // }

        // return data;
        //Look into this later
        // if($state.current.url !== '/results'){
        //   console.log("Inside if Statement", $state.current.url)
        //   $state.go('results');
        // } else {
        //   console.log("no!!!!!!!!!!!")
        // $state.go($state.current, {}, {reload: true});          
        // }
    })
  };

    // $scope.showRecipe = function(value){
    //   console.log('this is value:', value);
    //   thisRecipe = value;
    // }
    // $scope.showRecipe();
    
}]);
