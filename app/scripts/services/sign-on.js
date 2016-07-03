'use strict';

angular.module('Pinterest')
  .service('signOnService', ['$http', '$routeParams', function( $http, $routeParams ) {

    this.checkAuthorization = function( ) {
      console.log($routeParams);
      var params = $routeParams;

      if ( $routeParams.state = 'appconnected' ) {
        console.log($routeParams.code);
        return $routeParams.code;
      }

    };





  }]);