angular.module('app').service('studentService', function ($http) {

    this.get = function (url) {
        let promise = $http.get(url).then(function (response) {
            return response.data;
        });

        return promise;
    }

    this.getStudents = function () {
        return this.get('/api/student');
    }

    this.getStudent = function (id) {
        return this.get('/api/student/' + id);
    }

    this.createStudent = function (student) {
        let promise = $http({
            url: '/api/student',
            method: "POST",
            data: student,
            headers: {'Content-Type': undefined}
        }).then(function (response) {
            return response.data;
        });
        return promise;
    }

    this.updateStudent = function (student) {
        let promise = $http({
            url: '/api/student/' + student.get('id') + '?_method=PUT',
            method: "POST",
            data: student,
            headers: {'Content-Type': undefined}
        }).then(function (response) {
            return response.data;
        });
        return promise;
    }

    this.deleteStudent = function (id) {
        let promise = $http.delete('/api/student/' + id).then(function (response) {
            return response.data;
        });
        return promise;
    }

});