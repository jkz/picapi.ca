'use strict';

angular.module('pica')
  .controller('RanksCtrl', function ($scope) {
    $scope.images = [
      {
        name: 'Image 1',
        href: '#/pica/1',
        src: '//placekitten.com/400/400',
        caption: 'Caption of image 1',
      },
      {
        name: 'Image 2',
        href: '#/pica/2',
        src: '//placekitten.com/500/500',
        caption: 'Caption of image 2',
      },
      {
        name: 'Image 3',
        href: '#/pica/3',
        src: '//placekitten.com/450/450',
        caption: 'Caption of image 3',
      }
    ];
  });
