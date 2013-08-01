angular.module 'pica'
  .directive 'battle', ($http) ->
    templateUrl: 'templates/battle.html',
    restrict: 'E',
    link: ($scope, element, attrs) ->
      $http.get '/assets/api/battle.json'
        .then (data) ->
          $scope.images = data

      scope.images =
        left: images.image1,
        right: images.image2,
