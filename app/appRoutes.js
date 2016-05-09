feastly.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'Components/Homepage/homeview.html',
      controller: 'homeViewCtrl',
      authenticate: true
    })
    .when('/register', {
      templateUrl: 'Components/LandingPage/register.html',
      controller: 'LandingController'
    })
    .when('/favorites', {
      templateUrl:'Components/Favorites/favoritesview.html',
      controller:'FavoritesController',
      authenticate: true
     })
    .when('/login', {
      templateUrl: 'Components/LandingPage/login.html',
      controller: 'LandingController'
    })
    .when('/recipe', {
      templateUrl: 'Components/Recipe/recipeview.html',
      controller: 'RecipeViewCtrl',
      authenticate: true
    })
     .when('/results', {
      templateUrl: 'Components/SearchResults/resultsview.html',
      controller: 'search.ctrl',
      authenticate: true
    })
     .otherwise({redirectTo: '/home'});
});
