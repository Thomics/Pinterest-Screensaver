'use strict';

angular.module('pinterest')
  .directive('psDisplayControls', function(){
    return {
      templateUrl: 'public/templates/displayControls.html',
      replace: true,
      restrict: 'EA'
    }
  });