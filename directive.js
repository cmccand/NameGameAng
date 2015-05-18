var app = angular.module('NameApp', []);

app.directive('matchDirective', function (BooksService) {
  return {
    link: function ($scope, element, attrs) {
      element.bind('click', function () {
        element.html('You clicked me!');
      });
    }
  };
});
