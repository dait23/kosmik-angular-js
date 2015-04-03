'use strict';

angular.module('kosmikApp')
 
  .directive('startslider', [function () {
    return {
      restrict: 'A',
       replace: true,
       template: '<ul class="bxslider">' +
                   '<li ng-repeat="picture in pictures">' +
                     '<div class="container">' +
                     '<div class="row">' + 
                        '<div class="kolom-4">' +
                        '<div class="title-slider">' +
                           '<h1>{{picture.title}}</h1>' + ' <div class="linex"></div>' + 
                           ' <h4>Kosmik</h4>' +
                           '<a class="btn-large" ng-href="#/">read now</a>' +
                                 '</div>' +
                         '</div>' +
                     '</div>' +
                     '</div>' +
                     '<a href="#/"><img ng-src="{{picture.image}}" alt="" /></a>' +
                   
                   '</li>' +
                  '</ul>',
      link: function (scope, elm, attrs) {

        elm.ready(function() {
$("." + $(elm[0]).attr('class')).bxSlider({
                   auto: true
            });

          });
        
      }
    };
  }])
  ////////////////////////////////
   
  

/////////////////////////
  .controller('SlideCtrl', ['$scope', '$http', function($scope, $http) {
    //$scope.base = 'http://localhost/kosmik';

    $scope.pictures = [
  {
    "id_slider":"1",
    "title":"Wanara",
    "link":"#1",
    "image":"_/img/slider/4.jpg",
    "datelog":"lorem"
  },
  {
    "id_slider":"2",
    "title":"raibarong",
    "link":"#2",
    "image":"_/img/slider/3.jpg",
    "datelog":"lorem"
  }
];
  }]);
