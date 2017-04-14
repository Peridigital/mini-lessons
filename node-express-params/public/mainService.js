angular.module('app')
.service('mainService', function($http) {


  this.getUsers = function() {
    return $http({
      method: 'GET',
      url: '/api/users'
    }).then(function(response) {
      return response.data.users;
    })
  }

  this.getOneUser = function( id ) {
    return $http({
      method: 'GET',
      url: '/api/get-one-user/' + id
    }).then(function( response ) {
      return response.data.user;
    })
  }

  this.getAuto = function(name) {
    return $http({
      method: 'GET',
      url: '/api/auto?auto=' + name
    }).then(function(response) {
      return response.data;
    })
  }




})
