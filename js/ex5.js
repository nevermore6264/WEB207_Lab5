var app = angular.module("myApp", []);
app.controller("showInfo", function ($scope) {
    $scope.products = [
        {
            name: "Đồng hồ Thuỵ Sỹ",
            image: "1001.jpg",
            price: 1100
        },
        {
            name: "Đồng hồ Casio",
            image: "1002.jpg",
            price: 1200
        },
        {
            name: "Máy tính Dell",
            image: "1003.jpg",
            price: 1300
        },
        {
            name: "Máy tính HP",
            image: "1004.jpg",
            price: 1400
        },
        {
            name: "Máy ảnh Panasonic",
            image: "1005.jpg",
            price: 1500
        },
        {
            name: "Máy tính Acus",
            image: "1006.jpg",
            price: 1600
        },
        {
            name: "Mũ vành rộng",
            image: "1007.jpg",
            price: 1700
        },
        {
            name: "Máy tính MSI",
            image: "1008.jpg",
            price: 1800
        },
        {
            name: "Nhẫn mỹ ký",
            image: "1009.jpg",
            price: 1900
        },
        {
            name: "Vali",
            image: "1010.jpg",
            price: 1100
        },
    ];
    $scope.edit = function (index) {
        $scope.$parent.index = index;
        $scope.$parent.student = angular.copy($scope.$parent.students[index]);
    }
});