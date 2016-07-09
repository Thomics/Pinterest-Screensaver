'use strict';

angular.module('pinterest')
  .controller('displayBoardCtrl', [ 'signOnService', "$scope", '$location', '$interval',
    function( signOnService, $scope, $location, $interval){

      $scope.pins = signOnService.pins;

      $scope.counter = 0;


      $scope.incrementCounter = function( ) {
        $scope.counter += 1;
      };

      $interval($scope.incrementCounter, signOnService.seconds, $scope.pins.length);

  }]);
