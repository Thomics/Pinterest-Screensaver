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
    vm.scrollTop = scrollTop;
    vm.start = start;
    vm.stop = stop;
    var timer;
    vm.userInteractionChange = userInteractionChange;
    vm.windowScroll = windowScroll;


    /**
     * @namespace incrementCounter
     * @description increases the count for the interval.
     */
    function incrementCounter() {
      vm.counter += 1;
      vm.windowScroll();
    }

    /**
     * @namespace start
     * @description starts the slide show.
     */
    function start() {
      vm.paused = false;
      vm.windowScroll();
      timer = $interval(vm.incrementCounter, (signOnService.seconds * 1000), vm.pins.length);
    }

    /**
     * @namespace stop
     * @description Stops the slide show.
     */
    function stop() {
      vm.paused = true;
      $interval.cancel(timer);
      timer = undefined;
    }


    /**
     * @namespace reset
     * @description resets the current view back to the select-screen where the user chooses a Pinterest board to have
     * for a slide show.
     */
    function reset() {
      vm.stop();
      $location.url('/select-screen/?state=appconnected&code=' + signOnService.code);
    }

    /**
     * @namespace previous
     * @description returns to the previous pin.
     */
    function previous() {
      vm.counter -= 1;
      vm.stop();
      vm.scrollTop();
    }

    /**
     * @namespace next
     * @description skips the current pin.
     */
    function next() {
      vm.counter += 1;
      vm.stop();
      vm.scrollTop();
    }

    /**
     * @namespace scrollTop
     * @description scrolls the browser window to the top point.
     */
    function scrollTop() {
      $('html, body').animate({scrollTop: 0}, 0);
    }

    /**
     * @namespace userInteractionChange
     * @description During the slide show, if the user scrolls, clicks, or generally interacts with the browser, the app stops the
     * scrolling until the next pin is displayed.
     */
    function userInteractionChange() {
      //Code from stackoverflow
      $('html, body').bind("scroll mousedown DOMMouseScroll mousewheel keyup", function (event) {
        if (event.which > 0 || event.type === "mousedown" || event.type === "mousewheel") {
          $('html, body').stop().unbind('scroll mousedown DOMMouseScroll mousewheel keyup');
        }
      });
    }


    /**
     * @namespace windowScroll
     * @description When a pin is displayed windowScroll will take the height property of the image and scroll the browser window
     * down to the bottom and then back up to the top in the time interval specified by the user.
     */
    function windowScroll() {

      vm.scrollTop();

      if (!vm.paused) {

        $('html, body').animate({scrollTop: (vm.pins[vm.counter].image.original.height) + $(window).height()},
          ((signOnService.seconds * 1000) / 2));

        vm.userInteractionChange();

        $('html, body').animate({scrollTop: 0}, ((signOnService.seconds * 1000) / 2));

        vm.userInteractionChange();

      }
    }


  }

})();
