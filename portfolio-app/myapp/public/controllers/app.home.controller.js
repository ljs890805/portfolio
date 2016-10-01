(function () {
    'use strict';
    var moduleName = 'myApp';

    angular.module(moduleName).controller("HomeCtrl", HomeCtrl);

    function HomeCtrl ($scope) {
        var vm = $scope.vm;
    }
})();
