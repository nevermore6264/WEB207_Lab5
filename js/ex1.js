var app = angular.module("myApp", []);
app.controller("add", function ($scope) {
    $scope.save = function () {
        $scope.$parent.students[$scope.$parent.index] = $scope.student;
    }
    $scope.cancel = function () {
        $scope.$parent.student = angular.copy($scope.$parent.students[$scope.$parent.index]);
    }
});
app.controller("show", function ($scope) {
    $scope.model = {
        isFormDisabled : false
    }

    $scope.$parent.students = [
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
        isFormDisabled = true;
        $scope.$parent.index = index;
        $scope.$parent.student = angular.copy($scope.$parent.students[index]);
    }
});