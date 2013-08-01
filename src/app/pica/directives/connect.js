'use strict';

angular.module('pica')
  .directive('connect', function () {
    return {
      templateUrl: 'templates/connect.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
