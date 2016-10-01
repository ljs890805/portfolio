(function () {
    'use strict';
    var moduleName = 'myApp';

    angular.module(moduleName).controller("MainCtrl", MainCtrl);

    function MainCtrl($scope, appNavigator) {
        var vm = $scope.vm = {};

        vm.goHome = goHome;
        vm.goSample = goSample;

        function goHome () {
            appNavigator.goToHome();
        }

        function goSample () {
            appNavigator.goTo("sample");
        }
    }

})();