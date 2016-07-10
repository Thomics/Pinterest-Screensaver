'use strict';

angular.module('pinterest')
  .controller('displayBoardCtrl', [ 'signOnService', "$scope", '$location', '$interval',
    function( signOnService, $scope, $location, $interval){

      $scope.pins = signOnService.pins;
      $scope.paused = true;
      $scope.counter = 0;
      var timer;


      $scope.incrementCounter = function( ) {
        $scope.counter += 1;
        $scope.windowScroll();
      };


      $scope.start = function() {
        $scope.paused = false;
        $scope.windowScroll();
        timer = $interval($scope.incrementCounter, (signOnService.seconds * 1000), $scope.pins.length);
      };


      $scope.stop = function() {
        $scope.paused = true;
        $interval.cancel(timer);
        timer = undefined;
      };


      $scope.windowScroll = function() {

        if( !$scope.paused ) {

          $('html, body').animate( { scrollTop: ($scope.pins[$scope.counter].image.original.height) + $(window).height() },
            ((signOnService.seconds * 1000) / 2));

          $('html, body').bind("scroll mousedown DOMMouseScroll mousewheel keyup", function (event) {
            if (event.which > 0 || event.type === "mousedown" || event.type === "mousewheel") {
              $('html, body').stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup');
            }
          });

          $('html, body').animate( { scrollTop: 0 }, ((signOnService.seconds * 1000) / 2) );

          //Code from stackoverflow
          $('html, body').bind("scroll mousedown DOMMouseScroll mousewheel keyup", function (event) {
            if (event.which > 0 || event.type === "mousedown" || event.type === "mousewheel") {
              $('html, body').stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup');
            }
          });

        }
      };


  }]);
