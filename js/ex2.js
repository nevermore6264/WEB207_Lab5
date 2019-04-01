var app = angular.module("myApp", []);
app.controller("add", function ($scope, $rootScope) {
    $scope.save = function () {
        $rootScope.students[$rootScope.index] = $scope.student;
    }
    $scope.cancel = function () {
        $rootScope.student = angular.copy($rootScope.students[$rootScope.index]);
    }
});
app.controller("show", function ($scope, $rootScope) {
    $rootScope.students = [
        {
            name: "Trần Trung Hiếu",
            birthday: "26-06-1997",
            mark: 10
        },
        {
            name: "Nguyễn Thị Thu Thủy",
            birthday: "22-08-1997",
            mark: 8
        }
    ];
    $scope.edit = function (index) {
        $rootScope.index = index;
        $rootScope.student = angular.copy($rootScope.students[index]);
    }
});