'use strict';

angular.module('pinterest')
  .directive('displayControls', function(){
    return {
      templateUrl: 'public/templates/display-controls.html',
      replace: true,
      restrict: 'EA'
    }
  });