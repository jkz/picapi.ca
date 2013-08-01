angular.module('pica')
  .controller 'BattleCtrl', ($scope, $http) ->
      $http.get('/assets/api/battle.json')
        .then (data) ->
          console.log data
          $scope.battle = data

  .directive 'battle', ->
    templateUrl: 'pica/battle/battle.tpl.html',
    restrict: 'E',
    link: ($scope, element, attrs) ->
      ###
      scope.images =
        left: images.image1
        right: images.image2
      ###
