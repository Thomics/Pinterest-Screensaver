'use strict';

var app = angular.module('Pinterest', ['ngRoute']);


app.config(["$routeProvider", function( $routeProvider ) {
  console.log('here');

  $routeProvider
      .when('/', {
        templateUrl: 'public/templates/sign-on.html'
      })
      .when('/select-screen', {
        templateUrl: 'public/templates/select-screen.html'
      })
      .when('/display-board', {
        templateUrl: 'public/templates/display-board.html'
      });

}]);
