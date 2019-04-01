var app = angular.module("myApp", []);
app.controller("crud", function ($scope) {
    $scope.students = [];
    $scope.student = {};
    $scope.index = -1;

    $scope.clear = function () {
        $scope.student = {};
        $scope.index = -1;
    }
    $scope.insert = function () {
        $scope.students.push(angular.copy($scope.student));
        $scope.clear();
    }
    $scope.update = function () {
        $scope.students[$scope.index] = angular.copy($scope.student);
    }
    $scope.delete = function () {
        $scope.students.splice($scope.index, 1);
        $scope.clear();
    }
    $scope.cancel = function () {
        if ($scope.index == -1) {
            $scope.clear();
        } else {
            $scope.edit($scope.index);
        }
    }
    $scope.edit = function (index) {
        $scope.index = index;
        $scope.student = angular.copy($scope.students[index]);

    }
});