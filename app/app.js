'use strict';

angular.module('pinterest', ['ngRoute'])
  .config(["$routeProvider", function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: 'public/templates/userSignOn.html'
    })
    .when('/select-screen/?state=:connected&code=:code', {
      templateUrl: 'public/templates/retrieveBoards.html',
      controller: 'RetrieveBoardsController',
      controllerAs: 'retrieveBoard'
    })
    .when('/select-screen', {
      templateUrl: 'public/templates/retrieveBoards.html',
      controller: 'RetrieveBoardsController',
      controllerAs: 'retrieveBoard'
    })
    .when('/display-board', {
      templateUrl: 'public/templates/displayBoard.html',
      controller: 'DisplayBoardController',
      controllerAs: 'displayBoard'
    });
}]);
