(function () {
  "use strict";
  angular.module('NameApp')
  .factory('BooksService', function ($http, $rootScope) {
    var url = 'http://api.namegame.willowtreemobile.com/';


    var getMyBooks = function () {
      return $http.get(url);
    }

    var getSingleBook = function(id) {
      return $http.get(url + '/' + id);
    }

    return {
      getBooks: getMyBooks,
      getSingleBook: getSingleBook,
    }

  });

})();
