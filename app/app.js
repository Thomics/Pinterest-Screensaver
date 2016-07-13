'use strict';

angular.module('pinterest', ['ngRoute'])
  .config(["$routeProvider", function( $routeProvider ) {

  $routeProvider
    .when('/', {
      templateUrl: 'public/templates/sign-on.html'
    })
    .when('/select-screen/?state=:connected&code=:code', {
      templateUrl: 'public/templates/select-screen.html'
    })
    .when('/select-screen', {
      templateUrl: 'public/templates/select-screen.html'
    })
    .when('/display-board', {
      templateUrl: 'public/templates/display-board.html'
    });

}]);
