'use strict';

var app = angular.module('Pinterest', ['ngRoute']);


app.config(["$routeProvider", '$locationProvider', function( $routeProvider, $locationProvider ) {
  console.log('here');

  $routeProvider
      .when('/', {
        templateUrl: 'public/templates/sign-on.html'
      })
      .when('/?state=:connected&code=:code', {
        templateUrl: 'public/templates/select-screen.html'
      })
      .when('/select-screen', {
        templateUrl: 'public/templates/select-screen.html'
      })
      .when('/display-board', {
        templateUrl: 'public/templates/display-board.html'
      });


}]);
