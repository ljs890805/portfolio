(function () {
    'use strict';
    var moduleName = 'myApp';

    angular.module(moduleName).config(routing);

    function routing ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/home.html'
            })
            .state('profile', {
                url: '/profile',
                templateUrl: 'views/profile.html'
            })
            .state('resume', {
                url: '/resume',
                templateUrl: 'views/resume.html'
            })
            .state('sample', {
                url: '/sample',
                templateUrl: 'views/sample.html'
            });
    }
})();
