'use strict';

var images = {
  'image1': {
    name: 'Image 1',
    href: '#/pica/1',
    src: '//placekitten.com/400/400',
    caption: 'Caption of image 1',
    won: '13',
    lost: '230',
  },
  'image2': {
    name: 'Image 2',
    href: '#/pica/2',
    src: '//placekitten.com/300/300',
    caption: 'Caption of image 2',
    won: '84',
    lost: '127',
  },
  'image3': {
    name: 'Image 3',
    href: '#/pica/3',
    src: '//placekitten.com/350/350',
    caption: 'Caption of image 3',
    won: '349',
    lost: '84',
  }
};

var profile = {
    name: "Kitty the Cat",
    provider: 'facebook',
    credentials: {
      token: 'KAUYAKajkhsbAKbhsjkKBYUsbkdkjawbhj',
    },
    won:  '423',
    lost: '342',
};

angular.module('pica')
  .controller('ProfileCtrl', function ($scope) {
    $scope.profile = profile;
    $scope.images = images;
    $scope.votes = [
      {
        'winner': images[0],
        'loser': images[1]
      },
      {
        'winner': images[0],
        'loser': images[2]
      },
      {
        'winner': images[1],
        'loser': images[2]
      },
    ];
  });
