(function () {
    'use strict';
    var moduleName = 'myApp';

    angular.module(moduleName).controller("SampleCtrl", SampleCtrl);

    function SampleCtrl ($scope) {
        var vm = $scope.vm;

        vm.demo1_function = demo1_function;
        vm.demo2_function = demo2_function;
        vm.demo3_function = demo3_function;
        vm.demo4_function = demo4_function;
        vm.demo_check_value = 1;

        function demo1_function () {
          vm.demo_check_value = 1;
        }
        function demo2_function () {
          vm.demo_check_value = 2;
        }
        function demo3_function () {
          vm.demo_check_value = 3;
        }
        function demo4_function () {
          vm.demo_check_value = 4;
        }
    }
})();
