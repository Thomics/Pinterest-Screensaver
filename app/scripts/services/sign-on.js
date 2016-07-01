'use strict';

angular.module('Pinterest')
  .service('signOnService', ['$http', '$routeParams', function( $http, $routeParams ) {

    this.checkAuthorization = function( ) {
      console.log($routeParams);
      var params = $routeParams;
      console.log(params);
    };





  }]);