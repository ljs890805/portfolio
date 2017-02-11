(function () {
    'use strict';
    var moduleName = 'myApp';

    angular.module(moduleName).controller("MainCtrl", MainCtrl);

    function MainCtrl($scope, appNavigator, loginHistoryManager, testManager) {
        var vm = $scope.vm = {};

        loginHistoryManager.postLoginHistory(function (status, data) {
            if (status == 204) {
                console.log("success");
            } else {
                console.log(status, data);
            }
        });

        testManager.getTests(function (status, data) {
            if (status == 200) {
                console.log(data);
            } else {
                console.log(status, data);
            }
        });

        vm.goHome = goHome;
        vm.goProfile = goProfile;
        vm.goResume = goResume;
        vm.goSample = goSample;
        vm.some_function = some_function;

        function goHome () {
            appNavigator.goToHome();
            vm.some_check_value = false;
        }

        function goProfile (changeState) {
            appNavigator.goTo("profile");
            if (changeState) vm.some_check_value = !vm.some_check_value;
        }

        function goResume (changeState) {
            appNavigator.goTo("resume");
            if (changeState) vm.some_check_value = !vm.some_check_value;
        }

        function goSample (changeState) {
            appNavigator.goTo("sample");
            if (changeState) vm.some_check_value = !vm.some_check_value;
        }

        function some_function () {
          vm.some_check_value = !vm.some_check_value;
        }
    }



})();
