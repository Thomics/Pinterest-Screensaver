'use strict';

var app = angular.module('pinterest', ['ngRoute']);


app.config(["$routeProvider", '$locationProvider', function( $routeProvider, $locationProvider ) {

  $routeProvider
    .when('/', {
      templateUrl: 'public/templates/sign-on.html'
    })
    .when('/select-screen/?state=:connected&code=:code', {
      templateUrl: 'public/templates/select-screen.html',
    })
    .when('/select-screen', {
      templateUrl: 'public/templates/select-screen.html'
    })
    .when('/display-board', {
      templateUrl: 'public/templates/display-board.html'
    })
    .when('/public/templates/authorization.html/?state=:connected&code=:code', {
      templateUrl: 'public/templates/select-screen.html'
    });



}]);
