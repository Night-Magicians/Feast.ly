var thisRecipe;
angular.module ('feastly.home', [])
.controller('homeViewCtrl', function($scope, $http, $location, Recipe) {

  $scope.data = '';
  $scope.query = '';
  $scope.showRecipe = '';
  $scope.showThisOne;

  $scope.showRecipe = function(value){
    thisRecipe = value;
  };

  //on load, features pages come in
  $scope.featured = function() {
    var randIngredients = ['Lemon', 'Salmon', 'Artichoke', 'Blueberry', 'Scone', 'Tumeric', 'Mango', 'Mushroom', 'White Pepper',
        'Quinoa', 'Sherry', 'Macadamia'];
    var randIndex = Math.floor(Math.random() * randIngredients.length);
    return $http({
          method: 'GET',
          url: 'http://api.yummly.com/v1/api/recipes?_app_id=85328aaa&_app_key=9b9c3f69de268c05cd19da7b5bea7a42&q='+ randIngredients[randIndex] + ''
      }).then(function(res) {
        $scope.featured = res.data;
        return res.data;
    });
  };
  //invokes featured() on load
  $scope.featured();
});
