(function () {
  "use strict";
  angular.module('NameApp')
  .controller('MainController', function (BooksService,$location,$routeParams,$rootScope) {
    var mainCtrl = this;

    mainCtrl.newBook = {};

    BooksService.getBooks().success(function(data) {
      mainCtrl.books = data;
    });

    BooksService.getSingleBook($routeParams.bookId).success(function(data) {
      mainCtrl.singleBook = data;
    });

    mainCtrl.currentIndex = $routeParams.bookId;
  });

})();
