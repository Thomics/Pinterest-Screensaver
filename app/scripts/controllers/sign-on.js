'use strict';

angular.module('Pinterest')
  .controller('signOnCtrl', ["$scope", 'signOnService', function($scope, signOnService){

    signOnService.checkAuthorization();



  }]);
