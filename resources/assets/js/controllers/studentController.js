let app = angular.module('app');

app.directive('file', function() {
    return {
        require:"ngModel",
        restrict: 'A',
        link: function($scope, el, attrs, ngModel){
            el.bind('change', function(event){
                var files = event.target.files;
                var file = files[0];

                ngModel.$setViewValue(file);
                $scope.$apply();
            });
        }
    };
});

app.controller('studentController', function ($scope, $route, $routeParams, $location, genericService,) {

    $scope.init = function () {
        $scope.student = {};

        genericService.getFacultets().then(function (d) {
            $scope.facultets = d;
        });

        genericService.getGroups().then(function (d) {
            $scope.groups = d;
        });

        if ($routeParams.id) {
            console.log($routeParams.id);
            genericService.getStudent($routeParams.id).then(function (d) {
                $scope.img = d.img;
                d.img = null;
                $scope.student = d;
                
            });
        }

    }

    $scope.getSelectedFile = function() {
        console.log($scope.student);
    }

    $scope.save = function () {
        let studentFormData = transformToFormData($scope.student);

        if ($scope.student.id)
            updateStudent(studentFormData);            
        else
            createStudent(studentFormData);
    }

    let createStudent = function(studentFormData) {
        genericService.createStudent(studentFormData).then(function (student) {
            $location.path('/student_details/' + student.id);
        });
    }

    let updateStudent = function(studentFormData) {
        genericService.updateStudent(studentFormData).then(function (student) {
            $route.reload();
        });
    }

    let transformToFormData = function (student) {
        let fd = new FormData();

        _.forOwn(student, function (value, key) {
            fd.append(key, value);
        });
        return fd;
    }

    $scope.init();

});
