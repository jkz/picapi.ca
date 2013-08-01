'use strict';

angular.module('pica')
  .factory('category', function () {
    var categories = [
      {slug: 'cats', name: 'Cats'},
      {slug: 'chicks', name: 'Chicks'},
      {slug: 'dudes', name: 'Dudes'},
      {slug: 'funny', name: 'Funny'},
    ];

    // Public API here
    return {
      list: function () {
        return categories;
      }
    };
  });
