(function() {
  'use strict';

  angular
    .module('pinterest')
    .controller('DisplayTimeCtrl', DisplayTimeCtrl);

  DisplayTimeCtrl.$inject = ['signOnService', '$interval'];

  function DisplayTimeCtrl(signOnService, $interval) {

    var vm = this;

    vm.displayTime = displayTime;
    vm.seconds = signOnService.seconds;
    vm.timeInterval = timeInterval;
    vm.timer = Date.now();

    //activate();
    //
    //
    //function activate() {
    //  displayTime();
    //}

    function displayTime() {
      console.log('really');
      console.log(vm.seconds + "seconds");
      $interval(vm.timeInterval, 1000, vm.seconds);
    }

    function timeInterval() {
      vm.timer = Date.now();
    }

  }

})();
