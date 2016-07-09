'use strict';

var app = angular.module('pinterest', ['ngRoute']);


app.config(["$routeProvider", '$locationProvider', function( $routeProvider, $locationProvider ) {

  $routeProvider
      .when('/', {
        templateUrl: 'templates/sign-on.html'
      })
      .when('/select-screen/?state=:connected&code=:code', {
        templateUrl: 'templates/select-screen.html'
      })
      .when('/select-screen', {
        templateUrl: 'templates/select-screen.html'
      })
      .when('/display-board', {
        templateUrl: 'templates/display-board.html'
      })
      .otherwise('/', {
        templateUrl: 'templates/display-board.html'
      });

  $locationProvider.html5Mode(true);

}]);
