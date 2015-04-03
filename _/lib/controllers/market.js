'use strict';

angular.module('kosmikApp')
.controller('MarketCtrl',  ['$scope', '$http', 'ngCart', function($scope, $http, ngCart) {
  	$http.get('_/json/shopping.json').success(function(data) {
	    $scope.markets = data;
	    $scope.marketOrder = 'title';
	 });

  	 ngCart.setTaxRate(5);
     ngCart.setShipping(20000);   

}])

.controller('CartCtrl',  ['$scope', '$http', 'ngCart', function($scope, $http, ngCart) {

  	  ngCart.setTaxRate(5);
     ngCart.setShipping(20000);   

}]);

