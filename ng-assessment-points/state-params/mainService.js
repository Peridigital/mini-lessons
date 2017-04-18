angular.module('app')
.service('mainService', function($http) {

    var users = [
        {
            id: 1,
            name: 'Batman'
        }, {
            id: 1,
            name: 'Superman',

        }, {
            id: 1,
            name: 'Flash'
        }
    ];

    this.getUserData = function() {
      return users;
    }

})
