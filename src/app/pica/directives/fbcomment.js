'use strict';

angular.module('pica')
  .directive('fbcomment', function () {
    return {
      template:
        '<div class="fb-comments"' +
        '     data-href="{{ href }}"' +
        '     data-width="400"' +
        '     data-num-posts="5">' +
        '</div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.href = attrs.href;
        if (attrs.width) {
          scope.width = attrs.width;
        }
      }
    };
  });
