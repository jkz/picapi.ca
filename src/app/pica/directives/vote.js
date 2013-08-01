'use strict';

angular.module('pica')
  .directive('vote', function () {
    return {
      templateUrl: 'templates/vote.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
