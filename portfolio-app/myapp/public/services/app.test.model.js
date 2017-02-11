(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('Test', Test);

    /* @ngInject */
    function Test($resource, appResources) {
        return $resource(appResources.TEST, {}, {
            query: {
                isArray: true
            }
        });
    }

})();