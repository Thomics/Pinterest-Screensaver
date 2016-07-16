(function() {
  'use strict';

  angular
    .module('pinterest')
    .controller('DisplayBoardCtrl', DisplayBoardCtrl);

  DisplayBoardCtrl.$inject = ['signOnService', '$location', '$interval'];

  function DisplayBoardCtrl(signOnService, $location, $interval) {

    var vm = this;

    vm.counter = 0;
    vm.incrementCounter = incrementCounter;
    vm.next = next;
    vm.paused = true;
    vm.pins = signOnService.pins;
    vm.previous = previous;
    vm.reset = reset;
    vm.start = start;
    vm.stop = stop;
    var timer;
    vm.windowScroll = windowScroll;


    function incrementCounter() {
      vm.counter += 1;
      vm.windowScroll();
    }


    function start() {
      vm.paused = false;
      vm.windowScroll();
      timer = $interval(vm.incrementCounter, (signOnService.seconds * 1000), vm.pins.length);
    }


    function stop() {
      vm.paused = true;
      $interval.cancel(timer);
      timer = undefined;
    }


    function reset() {
      vm.stop();
      $location.url('/select-screen/?state=appconnected&code=' + signOnService.code);
    }

    function previous() {
      vm.counter -= 1;
      vm.stop();
      vm.start();
      vm.windowScroll();
    }

    function next() {
      vm.counter += 1;
      vm.stop();
      vm.start();
      vm.windowScroll();
    }


    function windowScroll() {

      $('html, body').animate({scrollTop: 0}, 0);

      if (!vm.paused) {

        $('html, body').animate({scrollTop: (vm.pins[vm.counter].image.original.height) + $(window).height()},
          ((signOnService.seconds * 1000) / 2));

        //Code from stackoverflow
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
    }


  }

})();
