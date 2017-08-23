angular.module('app')
.controller('groupController', function($scope, groupService) {

    $scope.init = function() {
        groupService.getGroups().then(function(data) {
            $scope.groups = data;
        });
    }

    $scope.addGroup = function() {
        let groupName = prompt('Please enter name for new group !');
        if (!groupName) 
            return;

        groupName = groupName.toUpperCase();
        let newGroup = {name: groupName};
        groupService.createGroup(newGroup).then(function(data) {
            if (data.id) {
                $scope.groups.push(data)
            }
            else {
                // handle error
                console.log(data);
            }
        });
    }

    $scope.editGroup = function(group) {
        let groupName = prompt('Please enter name for new group !', group.name);
        if (!groupName) 
            return;
        groupName = groupName.toUpperCase();
        let newGroup = {id: group.id, name: groupName};
        groupService.updateGroup(newGroup).then(function(data) {
            if (data.id) {
                group.name = groupName;
                group.created_at = data.created_at;
                group.updated_at = data.updated_at;
            }
            else {
                // handle error
                console.log(data);
            }
        });
    }

    $scope.deleteGroup = function(group) {
        groupService.deleteGroup(group.id).then(function(data) {
            if (data == group.id) {
                $scope.groups = _.without($scope.groups, group);
            }
            else {
                // handle error
                console.log(data);
            }
        });
    }


    $scope.init();
});