angular.module('app').controller('studentsController', function($scope, genericService) {

    $scope.init = function() {
        genericService.getFacultets().then(function(d) {
            $scope.facultets = d;
        });
        
        genericService.getGroups().then(function(d) {
            $scope.groups = d;
        });
        
        genericService.getStudents().then(function(d) {
            $scope.students = d;
        });
    }

    $scope.deleteStudent = function(student) {
        let userRes = confirm("Press ok if you really want to delete that student");
        if (!userRes) return;

        genericService.deleteStudent(student.id).then(function(d) {
            $scope.students = _.without($scope.students, student);
        });
    }

    $scope.init();

});