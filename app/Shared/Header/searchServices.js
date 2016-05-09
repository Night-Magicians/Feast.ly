var results = ['hola', 'hello'];
angular.module('search.services', [])

.factory('Recipes', ['$http', '$q',function($http, $q){
  // var results;
  getRecipes = function(criteria) {
    return $http({
          method: 'GET',
          url: 'http://api.yummly.com/v1/api/recipes?',
          params: criteria,
          headers: {'X-Yummly-App-ID':'85328aaa','X-Yummly-App-Key': '9b9c3f69de268c05cd19da7b5bea7a42'}
       }).success(function(res){
          results = res.matches;
          return res.data;
       }).error(function(){
          alert("error retrieving data");
       });
  };

  getFavorites = function() {
    return $http({
      method: 'GET',
      url: '/api/favorites'
    });
  };

  return {
    getRecipes : getRecipes,
    getFavorites: getFavorites
  };
}]);
