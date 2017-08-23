angular.module('app').service('genericService', function($http, studentService) {

    this.get = function(url) {
        let promise = $http.get(url).then(function (response) {
        return response.data;
      });
      
      return promise;
    }

    this.getStudents = studentService.getStudents;
    this.getStudent = studentService.getStudent;
    this.deleteStudent = studentService.deleteStudent;
    this.createStudent = studentService.createStudent;
    this.updateStudent = studentService.updateStudent;

    this.getGroups = function() {
        return this.get('/api/group');
    }

    this.getFacultets = function() {
        return this.get('/api/facultet');
    }
    
});