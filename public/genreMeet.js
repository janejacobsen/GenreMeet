(function () {
    'use strict';

    angular
        .module('genreMeet', ['ngRoute', 'ngResource'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config ($routeProvider, $locationProvider, $momentProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'home/home.view.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })

            .when('/app', {
                templateUrl: '/app/app.view.html',
                controller: 'appController',
                controllerAs: 'vm'
            })
            .when('/events', {
                templateUrl: '/events/events.view.html',
                controller: 'eventsController',
                controllerAs: 'vm'
            })
            .when('/events/:event_id', {
                templateUrl: '/events/event.view.html',
                controller: 'eventController',
                controllerAs: 'vm'
            })
            .otherwise({redirectTo: '/'});

        // use the HTML5 History API
        $locationProvider.html5Mode(true);

    }

    run.$inject= ['$rootScope', '$location'];
    function run($rootScope, $location) {
        // $rootScope.$on('$routeChangeStart', function(event, nextRoute, currentRoute) {
        //     if ($location.path() === '/app' && !Authentication.isLoggedIn()) {
        //         $location.path('/');
        //     }
        // });

    }

})();