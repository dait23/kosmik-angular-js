'use strict';

angular.module('kosmikApp')
.controller('CreatorCtrl', ['$scope', '$http',  function($scope, $http) {
  	$http.get('_/json/creator.json').success(function(data) {
	    $scope.creators = data;
	    $scope.creatorOrder = '-grade';
	 });

}]);
