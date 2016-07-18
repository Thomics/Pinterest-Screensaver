(function() {
  'use strict';

  angular
    .module('pinterest')
    .controller('DisplayTimeCtrl', DisplayTimeCtrl);

  DisplayTimeCtrl.$inject = ['signOnService', '$interval'];

  function DisplayTimeCtrl(signOnService, $interval) {

    var vm = this;

    vm.displayTime = displayTime;
    vm.seconds = signOnService.seconds || 10;
    vm.timeInterval = timeInterval;
    var timer;

    console.log(vm.seconds);

    function displayTime() {
      console.log('really');
      $interval(vm.timeInterval, 1000, vm.seconds);
    }

    function timeInterval() {
      timer = Date.now();
      console.log(timer);
    }

  }




})();
