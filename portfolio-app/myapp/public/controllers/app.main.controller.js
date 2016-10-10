(function () {
    'use strict';
    var moduleName = 'myApp';

    angular.module(moduleName).controller("MainCtrl", MainCtrl);

    function MainCtrl($scope, appNavigator) {
        var vm = $scope.vm = {};

        vm.goHome = goHome;
        vm.goProfile = goProfile;
        vm.goResume = goResume;
        vm.goSample = goSample;
        vm.some_function = some_function;

        function thisState() {
            return appNavigator.self;
        }
        function goHome () {
            appNavigator.goToHome();
        }

        function goProfile () {
            appNavigator.goTo("profile");
            vm.some_check_value = !vm.some_check_value;
        }

        function goResume () {
            appNavigator.goTo("resume");
            vm.some_check_value = !vm.some_check_value;
        }

        function goSample () {
            appNavigator.goTo("sample");
            vm.some_check_value = !vm.some_check_value;
        }

        function some_function () {
          vm.some_check_value = !vm.some_check_value;
        }
    }



})();
