'use strict';

angular.module('pinterest')
  .directive('displayTime', function(){
    return {
      restrict: 'EA',
      controller: 'DisplayTimeCtrl',
      controllerAs: 'timeCtrl',
      template: '<div>{{timeCtrl.timer}}</div>'
    }
  });