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

        function goHome () {
            appNavigator.goToHome();
        }

        function goProfile () {
            appNavigator.goTo("profile");
        }

        function goResume () {
            appNavigator.goTo("resume");
        }

        function goSample () {
            appNavigator.goTo("sample");
        }

        function some_function () {
          vm.some_check_value = !vm.some_check_value;
        }
    }



})();
