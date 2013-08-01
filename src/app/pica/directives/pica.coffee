angular.module('pica')
  .directive 'pica', ->
    scope:
      image: '=imageModel'
    templateUrl: 'pica/directives/pica.tpl.html'
    restrict: 'E'
    link: (scope) ->
      scope.image =
          name: 'Image 1'
          href: '#/pica/1'
          src: '//placekitten.com/400/400'
          caption: 'Caption of image 1'
