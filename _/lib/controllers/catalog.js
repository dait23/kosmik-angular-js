

var catalogControllers = angular.module('catalogControllers', []);

catalogControllers.controller('NewCatalogCtrl', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('_/json/catalog.json').success(function(data) {
     $scope.newcatalogs = data;
	 $scope.whichItem = $routeParams.itemId;
     
  });
}]);

catalogControllers.controller('CatalogCtrl', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('_/json/catalog.json').success(function(data) {
    $scope.catalogs = data;
    $scope.catalogOrder = '-id_catalog';
  });
}]);

catalogControllers.controller('CatalogDetailCtrl', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('_/json/catalog.json').success(function(data) {
     $scope.detailcatalogs = data;
    $scope.whichItem = $routeParams.itemId;
  });
}]);



