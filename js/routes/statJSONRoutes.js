angular.module('statJSONRoutes', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
            .state('home', {
                url: "/home",
                controller:'statJSONController as vm',
                templateUrl: "views/home.html"
            })
    })