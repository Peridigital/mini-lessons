angular.module('app').service('mainService', function($http) {

    var students = [
        {
            name: 'Tim',
            grade: 'A'
        }, {
            name: 'Laura',
            grade: 'A+'
        }, {
            name: 'Kim',
            grade: 'B-'
        }, {
            name: 'John',
            grade: 'A'
        }, {
            name: 'Wyatt',
            grade: 'C+'
        }, {
            name: 'Samantha',
            grade: 'B'
        }
    ];

    this.getStudentData = function() {
      return students;
    }

})
