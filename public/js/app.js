 /**
 * Main module of the application.
 */
angular
  .module('songsApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'addController'
      })
      .when('/song/:id', {
        templateUrl: 'views/update.html',
        controller: 'updateController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
