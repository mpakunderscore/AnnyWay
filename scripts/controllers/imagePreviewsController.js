(function() {
    'use strict'

    function ImagePreviewsController($scope, $timeout, $document) {
        var basePreviewPath = 'images/previews/'
        var basePhotoPath = 'images/photos/'
        $scope.images = [];
        for (var i = 1; i <= 47; i++) {
            var name = (i < 10 ? 'Image0000' : 'Image000') + i + '.jpg';
            $scope.images.push({
                index: i,
                previewPath: basePreviewPath + name,
                imagePath: basePhotoPath + name
            });
        }

        var wall = new freewall("#container");

        function init() {
            lightbox.init();
        }

        wall.reset({
            selector: '.brick',
            animate: true,
            cellW: 150,
            cellH: 'auto',
            onResize: function() {
                wall.fitWidth();
            }
        });

        var loadedImages = 0;
        $scope.imageLoaded = function () {
            loadedImages++;
            if (loadedImages === $scope.images.length)
                wall.fitWidth();
        }

        $document.ready(function () {
            init();
        });
    }

    angular.module('app').controller('ImagePreviewsController', ['$scope', '$timeout', '$document', ImagePreviewsController]);
}())