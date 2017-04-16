angular.module('app')
.directive('logIn', function() {

  return {

    restrict: 'AE',
    templateUrl: './logIn.html',
    scope: {
      fuel: '='
    }

  }

})
