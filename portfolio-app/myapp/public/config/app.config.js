(function () {
    'use strict';
    var moduleName = 'myApp';

    angular.module(moduleName).config(appConfig);

    function appConfig ($locationProvider) {
        $locationProvider.html5Mode(true);
    }
})();
