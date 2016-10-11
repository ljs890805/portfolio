(function () {
    'use strict';
    var moduleName = 'myApp';

    angular.module(moduleName).controller("HomeCtrl", HomeCtrl);

    function HomeCtrl ($scope) {
        var vm = $scope.vm;
        // var homeProfile;

        function goProfile () {
            appNavigator.goTo("profile");
        }

        function goResume () {
            appNavigator.goTo("resume");
        }

        function goSample () {
            appNavigator.goTo("sample");
        }

        // homeProfile.onclick() = goProfile();
    }
})();
