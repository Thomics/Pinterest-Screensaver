(function() {
  'use strict';

  angular
    .module('pinterest')
    .controller('displayBoardCtrl', displayBoardCtrl);


  function displayBoardCtrl(signOnService, $location, $interval) {

    var vm = this;
    vm.pins = signOnService.pins;
    vm.paused = true;
    vm.counter = 0;
    var timer;


    vm.incrementCounter = function () {
      vm.counter += 1;
      vm.windowScroll();
    };


    vm.start = function () {
      vm.paused = false;
      vm.windowScroll();
      timer = $interval(vm.incrementCounter, (signOnService.seconds * 1000), vm.pins.length);
    };


    vm.stop = function () {
      vm.paused = true;
      $interval.cancel(timer);
      timer = undefined;
    };

    vm.reset = function () {
      console.log('reset');
      vm.stop();
      $location.url('/select-screen/?state=appconnected&code=' + signOnService.code);
    };


    vm.windowScroll = function () {

      $('html, body').animate({scrollTop: 0}, 0);

      if (!vm.paused) {

        $('html, body').animate({scrollTop: (vm.pins[vm.counter].image.original.height) + $(window).height()},
          ((signOnService.seconds * 1000) / 2));

        $('html, body').bind("scroll mousedown DOMMouseScroll mousewheel keyup", function (event) {
          if (event.which > 0 || event.type === "mousedown" || event.type === "mousewheel") {
            $('html, body').stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup');
          }
        });

        $('html, body').animate({scrollTop: 0}, ((signOnService.seconds * 1000) / 2));

        //Code from stackoverflow
        $('html, body').bind("scroll mousedown DOMMouseScroll mousewheel keyup", function (event) {
          if (event.which > 0 || event.type === "mousedown" || event.type === "mousewheel") {
            $('html, body').stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup');
          }
        });

      }
    };


  }

  displayBoardCtrl.$inject = ['signOnService', '$location', '$interval'];

})();
