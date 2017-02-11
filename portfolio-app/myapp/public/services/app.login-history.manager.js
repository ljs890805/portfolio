(function () {
    'use strict';

    angular
        .module('myApp')
        .service('loginHistoryManager', loginHistoryManager);

    /* @ngInject */
    function loginHistoryManager(LoginHistory) {
        this.postLoginHistory = postLoginHistory;

        function postLoginHistory (callback) {
            var body = {};
            body = new LoginHistory(body);
            body.$save(function (data) {
                callback(204);
            }, function (data) {
                callback(data.status, data.data);
            });
        }
    }

})();