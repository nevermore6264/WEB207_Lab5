var app = angular.module("myApp", []);
app.controller("add", function ($scope) {
    $('.input-group.date').datepicker({format: "dd.mm.yyyy"});
    $scope.save = function () {
        $scope.$parent.students[$scope.$parent.index] = $scope.student;
    }
    $scope.cancel = function () {
        $scope.$parent.student = angular.copy($scope.$parent.students[$scope.$parent.index]);
    }
    $(function() {
        $( "#datepicker" ).datepicker({
            dateFormat : 'dd-mm-yy',
            changeMonth : true,
            changeYear : true,
            yearRange: '-100y:c+nn',
            maxDate: '-1d',
            onSelect: function(date) {
                angular.element($('#datepicker')).triggerHandler('input');
            }
        });
    });


});
app.controller("show", function ($scope) {

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
        $scope.$parent.index = index;
        $scope.$parent.student = angular.copy($scope.$parent.students[index]);
    }
});