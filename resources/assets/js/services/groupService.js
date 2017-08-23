angular.module('app').service('groupService', function ($http) {

    this.getGroups = function () {
        let promise = $http.get('/api/group').then(function (response) {
            return response.data;
        });
        return promise;
    }

    this.createGroup = function(group) {
        let promise = $http.post('/api/group', group).then(function (response) {
            return response.data;
        });
        return promise;
    }

    this.updateGroup = function(group) {
        let promise = $http.put('/api/group/' + group.id, group).then(function (response) {
            return response.data;
        });
        return promise;
    }

    this.deleteGroup = function(id) {
        let promise = $http.delete('/api/group/' + id).then(function(response) {
            return response.data;
        });
        return promise;
    }

})