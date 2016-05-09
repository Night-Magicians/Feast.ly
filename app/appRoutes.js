feastly.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'Components/Homepage/homeview.html',
      controller: 'homeViewCtrl'
    })
    .when('/favorites', {
      templateUrl: 'Components/Favorites/favoritesview.html',
      controller: 'FavoritesController'
    })
    .when('/fusion', {
      templateUrl: 'Components/Fusion/fusionview.html',
      controller: 'FusionController'
    })
    .when('/recipe', {
      templateUrl: 'Components/Recipe/recipeview.html',
      controller: 'RecipeViewCtrl',
      authenticate: true
    })
    .when('/register', {
      templateUrl: 'Components/LandingPage/register.html',
      controller: 'LandingController'
    })
    .when('/login', {
      templateUrl: 'Components/LandingPage/login.html',
      controller: 'LandingController'
    })
    .otherwise({redirectTo: '/home'});
});
