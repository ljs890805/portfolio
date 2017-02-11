(function () {
    'use strict';

    angular
        .module('myApp')
        .service('testManager', testManager);

    /* @ngInject */
    function testManager(Test) {
        this.getTests = getTests;

        function getTests (callback) {
            Test.query({}, function (data) {
                callback(200, data);
            }, function (data) {
                callback(data.status, data.data);
            });
        }
    }

})();