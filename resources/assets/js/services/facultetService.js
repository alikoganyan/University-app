angular.module('app').service('facultetService', function ($http) {

    this.getFacultets = function () {
        let promise = $http.get('/api/facultet').then(function (response) {
            return response.data;
        });
        return promise;
    }

    this.createFacultet = function(facultet) {
        let promise = $http.post('/api/facultet', facultet).then(function (response) {
            return response.data;
        });
        return promise;
    }

    this.updateFacultet = function(facultet) {
        let promise = $http.put('/api/facultet/' + facultet.id, facultet).then(function (response) {
            return response.data;
        });
        return promise;
    }

    this.deleteFacultet = function(id) {
        let promise = $http.delete('/api/facultet/' + id).then(function(response) {
            return response.data;
        });
        return promise;
    }

})