'use strict';

angular.module('pica')
  .controller('UploadCtrl', function ($scope, category) {
      $scope.categories = category.list();
  });
