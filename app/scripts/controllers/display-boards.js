'use strict';

angular.module('pinterest')
  .controller('displayBoardCtrl', [ 'signOnService', "$scope", '$location', '$interval',
    function( signOnService, $scope, $location, $interval){

      console.log('hi in new ctrl');
      console.log(signOnService.pins);


      $scope.pins = signOnService.pins;
      $scope.counter = 0;

      //$scope.displayPins = function() {
      //  var counter = 0;
      //
      //
      //
      //};

      $scope.incrementCounter = function( ) {
        $scope.counter += 1;
        console.log($scope.counter);
      };

      $interval($scope.incrementCounter, 1000, 5);



  }]);
