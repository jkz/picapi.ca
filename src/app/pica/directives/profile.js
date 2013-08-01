'use strict';

angular.module('pica')
  .directive('profile', function () {
    return {
      templateUrl: 'templates/profile.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
