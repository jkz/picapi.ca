'use strict';

angular.module('pica')
  .directive('minipica', function () {
    return {
      template:
          '<a ng-href="{{image.href}}">' +
            '<img ng-src="{{image.src}}">' +
          '</a>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.image = {
            name: 'Image 1',
            href: '#/pica/1',
            src: '//placekitten.com/400/400',
            caption: 'Caption of image 1',
        }
      }
    };
  });
