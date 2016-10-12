(function () {
    'use strict';
    var moduleName = 'myApp';

    angular.module(moduleName).controller("ResumeCtrl", ResumeCtrl);

    function ResumeCtrl ($scope) {
        var vm = $scope.vm;

        vm.resumeDown = resumeDown;

        function resumeDown() {
          console.log(12);
          window.open("/assets/images/resume.pdf", "_black");
        }
    }
})();
