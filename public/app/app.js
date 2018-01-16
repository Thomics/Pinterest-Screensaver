// VENDOR
import angular from 'angular';
import ngRoute from 'angular-route';
import jQuery from 'jquery';

// CONTROLLERS
//import '../app/scripts/controllers/displayBoard.controller.js';
//import '../app/scripts/controllers/retrieveBoards.controller.js';


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
    .when('/#%2Fselect-screen%3Fstate=appconnected&code=:code', {
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
