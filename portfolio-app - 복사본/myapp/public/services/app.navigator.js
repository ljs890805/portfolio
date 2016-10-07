(function () {
    'use strict';
    var moduleName = 'myApp';

    angular.module(moduleName).service("appNavigator", appNavigator);

    function appNavigator ($state) {
        this.goTo = goTo;
        this.goToHome = goToHome;

        var self = this;

        function goTo(name, param, reload, callback) {
            $state.go(name, param, {
                reload: reload
            }).then(function () {
                if (callback) {
                    callback();
                }
            });
        }

        function goToHome () {
            goTo("home");
        }
    }
})();
