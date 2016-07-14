'use strict';

angular.module('pinterest', ['ngRoute'])
  .config(["$routeProvider", function( $routeProvider ) {

  $routeProvider
    .when('/', {
      templateUrl: 'public/templates/sign-on.html'
    })
    .when('/select-screen/?state=:connected&code=:code', {
      templateUrl: 'public/templates/select-screen.html',
      controller: 'SignOnCtrl',
      controllerAs: 'sign'
    })
    .when('/select-screen', {
      templateUrl: 'public/templates/select-screen.html',
      controller: 'SignOnCtrl',
      controllerAs: 'sign'
    })
    .when('/display-board', {
      templateUrl: 'public/templates/display-board.html',
      controller: 'DisplayBoardCtrl',
      controllerAs: 'board'
    });

}]);
