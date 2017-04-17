angular.module('xdpie', ['ui.router','ngMaterial'])
    .config(function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.when('','/');
        $stateProvider
            .state('questionary', {
                url: '/questionary',
                templateUrl: '/views/home/questionary/questionary.html'
            })
            .state('success', {
                url: '/success',
                templateUrl: '/views/home/questionary/success.html'
            })
    });