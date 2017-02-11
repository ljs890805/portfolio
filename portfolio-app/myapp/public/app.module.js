(function () {
    'use strict';
    var moduleName = 'myApp';
    angular.module(moduleName, ['ui.router', 'ngResource']);

    angular.element(document).ready(function () {
        angular.bootstrap(document, [moduleName]);
    });
})();