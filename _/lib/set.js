angular.module('kosmikApp', ['ngResource', 'ngMessages', 'ui.router', 'mgcrea.ngStrap', 'satellizer','catalogControllers','tabs', 'ngCart'])
  .config(function($routeProvider,$stateProvider, $urlRouterProvider, $authProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '_/views/main.html',
         controller: 'MainCtrl'
      })

      .state('catalogDetail', {
         url: '/catalog/:itemId',
         templateUrl: '_/views/catalog_detail.html',
         controller: 'CatalogDetailCtrl'
      })
      .state('viewer', {
        url: '/viewer/episode/eps-1',
        templateUrl: '_/views/viewer.html',
         controller: 'ViewerCtrl'
      })
      .state('logout', {
        url: '/logout',
        template: null,
        controller: 'LogoutCtrl'
      })
      .state('profile', {
        url: '/profile',
        templateUrl: '_/views/profile.html',
        controller: 'ProfileCtrl',
        resolve: {
          authenticated: function($q, $location, $auth) {
            var deferred = $q.defer();

            if (!$auth.isAuthenticated()) {
              $location.path('/login');
            } else {
              deferred.resolve();
            }

            return deferred.promise;
          }
        }
      });

    $urlRouterProvider.otherwise('/');

    $authProvider.facebook({
      clientId: '347403772126508'
    });
    
  });
