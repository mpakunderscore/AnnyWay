(function() {
    'use strict';

    angular.module('app', ['ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('app', {
                    url: '/app',
                    abstract: true,
                    templateUrl: 'templates/main-page.html'
                })
                .state('app.preview', {
                    url: '/preview',
                    views: {
                        'header': {
                            templateUrl: 'templates/header.html'
                        },
                        'gallery': {
                            templateUrl: 'templates/image-previews.html',
                            controller: 'ImagePreviewsController'
                        }
                    }
                });

            $urlRouterProvider.otherwise('/app/preview');
        });
}())