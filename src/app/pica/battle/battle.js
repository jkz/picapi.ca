'use strict';

var images = {
  'image1': {
    name: 'Image 1',
    href: '#/pica/1',
    src: '//placekitten.com/400/400',
    caption: 'Caption of image 1',
  },
  'image2': {
    name: 'Image 2',
    href: '#/pica/2',
    src: '//placekitten.com/300/300',
    caption: 'Caption of image 2',
  },
  'image3': {
    name: 'Image 3',
    href: '#/pica/3',
    src: '//placekitten.com/350/350',
    caption: 'Caption of image 3',
  }
};

angular.module('pica')
  .directive('battle', function () {
    return {
      templateUrl: 'templates/battle.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.images = {
          left: images.image1,
          right: images.image2,
        }
      }
    };
  });
