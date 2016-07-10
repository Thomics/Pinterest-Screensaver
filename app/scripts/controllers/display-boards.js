'use strict';

angular.module('pinterest')
  .controller('displayBoardCtrl', [ 'signOnService', "$scope", '$location', '$interval',
    function( signOnService, $scope, $location, $interval){

      $scope.pins = signOnService.pins;

      $scope.counter = 0;


      $scope.incrementCounter = function( ) {
        $scope.counter += 1;
      };

      console.log(signOnService.seconds);
      console.log($scope.seconds);

      $interval($scope.incrementCounter, (signOnService.seconds * 1000), $scope.pins.length);

  }]);
