'use strict';

/**
 * @ngdoc overview
 * @name exoduzApp
 * @description
 * # exoduzApp
 *
 * Main module of the application.
 */
angular
  .module('kosmikApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'catalogControllers',
    'tabs',
    'ngCart',
    'facebook',
    'socialLinks',
    'afkl.lazyImage'


  ])
.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '_/views/main.html',
        controller: 'MainCtrl'
      })
      .when('/catalog', {
        templateUrl: '_/views/catalog.html',
        controller: 'CatalogCtrl'
      })
      .when('/creator', {
        templateUrl: '_/views/creator.html',
        controller: 'CreatorCtrl'
      })
       .when('/market', {
        templateUrl: '_/views/market.html',
        controller: 'MarketCtrl'
      })
       .when('/about', {
        templateUrl: '_/views/about.html',
        controller: 'AboutCtrl'
      })
       .when('/faq', {
        templateUrl: '_/views/faq.html',
        controller: 'FaqCtrl'
      })
       .when('/news', {
        templateUrl: '_/views/news.html',
        controller: 'NewsCtrl'
      })
      .when('/catalog/:itemId', {
        templateUrl: '_/views/catalog_detail.html',
        controller: 'CatalogDetailCtrl'
      })
      .when('/episode/:itemId', {
        templateUrl: '_/views/viewer.html',
        controller: 'CatalogDetailCtrl'
      })
       .when('/viewer/wanara/episode/eps-1', {
        templateUrl: '_/views/viewer.html',
        controller: 'ViewerCtrl'
      })
       .when('/viewer/wanara/episode/eps-2', {
        templateUrl: '_/views/viewer2.html',
        controller: 'ViewerCtrl'
      })
        .when('/viewer/wanara/episode/eps-3', {
        templateUrl: '_/views/viewer3.html',
        controller: 'ViewerCtrl'
      })
      .when('/cart', {
        templateUrl: '_/views/cart.html',
        controller: 'CartCtrl'
      })
      .when('/profile', {
        templateUrl: '_/views/profile.html',
        controller: 'ProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
     // $locationProvider.html5Mode(true);
    
  });



