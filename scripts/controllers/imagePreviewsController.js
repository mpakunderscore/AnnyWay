function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

(function() {
    'use strict'

    function ImagePreviewsController($scope, $timeout, $document) {
        var basePreviewPath = 'images/previews/'
        var basePhotoPath = 'images/photos/'
        $scope.images = [];

        var keys = [];
        var count = 47;
        for (var i = 1; i <= count; i++)
            keys.push(i);

        shuffle(keys);

        for (var j = 0; j < count; j++) {
            var name = (keys[j] < 10 ? 'Image0000' : 'Image000') + keys[j] + '.jpg';
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
            cellW: 200,
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