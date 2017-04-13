angular.module('xdpie', ['ui.router','ngMaterial','ui.bootstrap'])
    .config(function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.when('','/');
        $stateProvider

            .state('questionary', {
                url: '/questionary',
                templateUrl: '/views/home/questionary/questionary.html'
            })
    });