(function() {

  angular
    .module('genreMeet')
    .controller('findFriendsCtrl', findFriendsCtrl);
      findFriendsCtrl.$inject = ['$scope', '$http']
    function findFriendsCtrl ($scope, $http) {
      $scope.location = "";


    function submit() {
      $http.get()
    }
  };

})();
