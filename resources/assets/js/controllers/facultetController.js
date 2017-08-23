angular.module('app')
.controller('facultetController', function($scope, facultetService) {

    $scope.init = function() {
        facultetService.getFacultets().then(function(data) {
            $scope.facultets = data;
        });
    }

    $scope.addFacultet = function() {
        let facultetName = prompt('Please enter name for new facultet !');
        if (!facultetName) 
            return;

        facultetName = facultetName.charAt(0).toUpperCase() + facultetName.slice(1);
        let newFacultet = {name: facultetName};
        facultetService.createFacultet(newFacultet).then(function(data) {
            if (data.id) {
                $scope.facultets.push(data)
            }
            else {
                // handle error
                console.log(data);
            }
        });
    }

    $scope.editFacultet = function(facultet) {
        let facultetName = prompt('Please enter name for new facultet !', facultet.name);
        if (!facultetName) 
            return;

        facultetName = facultetName.charAt(0).toUpperCase() + facultetName.slice(1);
        let newFacultet = {id: facultet.id, name: facultetName};
        facultetService.updateFacultet(newFacultet).then(function(data) {
            if (data.id) {
                facultet.name = facultetName;
                facultet.created_at = data.created_at;
                facultet.updated_at = data.updated_at;
            }
            else {
                // handle error
                console.log(data);
            }
        });
    }

    $scope.deleteFacultet = function(facultet) {
        facultetService.deleteFacultet(facultet.id).then(function(data) {
            if (data == facultet.id) {
                $scope.facultets = _.without($scope.facultets, facultet);
            }
            else {
                // handle error
                console.log(data);
            }
        });
    }


    $scope.init();
});