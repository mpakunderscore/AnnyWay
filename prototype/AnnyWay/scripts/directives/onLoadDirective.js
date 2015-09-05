(function() {
    'use strict';

    function onLoadDirective() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                element.bind('load', function() {
                    scope.$apply(attrs.onLoad);
                });
            }
        };
    }

    angular.module('app').directive('onLoad', onLoadDirective)
}())