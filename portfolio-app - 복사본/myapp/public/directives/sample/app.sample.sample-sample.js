(function () {
    'use strict';
    var moduleName = 'myApp';

    angular.module(moduleName).directive("sampleSample", sampleSample);

    function sampleSample () {
        return {
            restrict: 'AE',
            templateUrl: 'directives/sample/app.sample.sample-sample.html',
            link: function (scope, element, attrs) {
                // console.log(element);
                // console.log(attrs);
            }
        }
    }
})();
