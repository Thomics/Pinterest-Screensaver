'use strict';

angular.module('pinterest')
  .controller('displayBoardCtrl', [ 'signOnService', "$scope", '$location', '$interval',
    function( signOnService, $scope, $location, $interval){

      //$scope.high = '10000px';

      $scope.pins = signOnService.pins;

      console.log(signOnService.pins);
      $scope.counter = 0;


      $scope.incrementCounter = function( ) {
        $scope.counter += 1;
      };

      console.log(signOnService.seconds);
      console.log($scope.seconds);

      $interval($scope.incrementCounter, (signOnService.seconds * 1000), $scope.pins.length);



      $scope.windowScroll = function() {

        $('html, body').animate({
          scrollTop: ($scope.pins[counter].image.original.height) + $(window).height()
        }, ((signOnService.seconds * 1000)/2));

        $('html, body').animate({
          scrollTop: 0
        }, ((signOnService.seconds * 1000)/2));

        //Code from stackoverflow
        $('html, body').bind("scroll mousedown DOMMouseScroll mousewheel keyup", function(event){
          if ( event.which > 0 || event.type === "mousedown" || event.type === "mousewheel"){
            $('html, body').stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup');
          }
        });
      };


  }]);
