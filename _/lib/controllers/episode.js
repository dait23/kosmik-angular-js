'use strict';

angular.module('kosmikApp')
  .controller('NewepisodeCtrl', ['$scope', '$http',  function($scope, $http) {

  	$http.get('_/json/episode.json').success(function(data) {
	    $scope.newepisodes = data;
	 });

}])
.controller('LastepisodeCtrl', ['$scope', '$http',  function($scope, $http) {

  	$http.get('_/json/episode.json').success(function(data) {
	    $scope.lastepisodes = data;
	 });

}])
.controller('BarongCtrl', ['$scope', '$http',  function($scope, $http) {

  	$http.get('_/json/episode.json').success(function(data) {
	    $scope.barongs = data;
	 });

}]);