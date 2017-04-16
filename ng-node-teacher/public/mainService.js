angular.module('app')
.service('mainService', function($http) {

  this.signIn = function(username, password) {
    return $http({
      method: 'POST',
      url: '/login',
      data: {
        username: username,
        password: password
      }
    }).then(function(response) {
      return response.data;
    })




  }



})
