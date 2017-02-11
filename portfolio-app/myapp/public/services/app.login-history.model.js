(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('LoginHistory', LoginHistory);

    /* @ngInject */
    function LoginHistory($resource, appResources) {
        return $resource(appResources.LOGIN_HISTORY, {}, {});
    }

})();