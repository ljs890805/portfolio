(function () {
    'use strict';
    var moduleName = 'myApp';

    angular.module(moduleName).controller("HomeCtrl", HomeCtrl);

    function HomeCtrl ($scope) {
        var vm = $scope.vm;

        vm.selectProduct = selectProduct;

        vm.products = [];
        vm.testInput = 'init test input';
        vm.placeholder = "입력해봐 양방향 바인딩 테스트야";

        $scope.$watch('vm.testInput', function (newVal, oldVal) {
            if (newVal != oldVal) {
                console.log(newVal);
            }
        }, true);

        for (var i=0; i<10; i++) {
            var product = {
                name: "product-name" + (i + 1),
                price: (i + 1) * 1000,
                amount: (i + 1) * 10
            };
            vm.products.push(product);
        }

        function selectProduct (product) {
            console.log(product);
        }
    }
})();
