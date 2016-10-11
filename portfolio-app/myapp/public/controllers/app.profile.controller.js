(function () {
    'use strict';
    var moduleName = 'myApp';

    angular.module(moduleName).controller("ProfileCtrl", ProfileCtrl);

    function ProfileCtrl ($scope) {
        var vm = $scope.vm;

        vm.pro1_function = pro1_function;
        vm.pro2_function = pro2_function;
        vm.pro3_function = pro3_function;
        vm.pro1_check_value = false;
        vm.pro2_check_value = false;
        vm.pro3_check_value = false;

        function pro1_function () {
          vm.pro1_check_value = !vm.pro1_check_value;
          vm.pro2_check_value = true;
          vm.pro3_check_value = true;
        }
        function pro2_function () {
          vm.pro2_check_value = !vm.pro2_check_value;
          vm.pro1_check_value = true;
          vm.pro3_check_value = true;
        }
        function pro3_function () {
          vm.pro3_check_value = !vm.pro3_check_value;
          vm.pro1_check_value = true;
          vm.pro2_check_value = true;
        }

    }
})();
