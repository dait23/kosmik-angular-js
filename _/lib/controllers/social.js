'use strict';

angular.module('kosmikApp')
.controller('ShareCtrl', ['$scope', '$timeout',  function($scope, $timeout) {
  	self = this;
	self.coolWord = 'kosmik';
		$timeout(function() {
			self.pinterestMediaUrl = 'http://lorempixel.com/100/100/nature/1';
		}, 1000)

}]);
