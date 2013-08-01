'use strict';

var images = {
  '1.jpg': {
    name: 'Image 1',
    href: '#/pica/1',
    src: '//placekitten.com/400/400',
    caption: 'Caption of image 1',
  },
  '2.jpg': {
    name: 'Image 2',
    href: '#/pica/2',
    src: '//placekitten.com/300/300',
    caption: 'Caption of image 2',
  },
  '3.jpg': {
    name: 'Image 3',
    href: '#/pica/3',
    src: '//placekitten.com/350/350',
    caption: 'Caption of image 3',
  }
};


angular.module('pica')
  .directive('pica', function () {
    return {
      scope: {
        image: '=imageModel',
      },
      templateUrl: 'templates/pica.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the pica directive');
        scope.image = {
            name: 'Image 1',
            href: '#/pica/1',
            src: '//placekitten.com/400/400',
            caption: 'Caption of image 1',
        }
      }
    };
  });
