(function () {
  "use strict";

  angular.module('NameApp', [
  'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider

    .when('/', {
      templateUrl: 'views/normal.html',
      controller: 'MainController as mainCtrl'
    })


  });


})();
