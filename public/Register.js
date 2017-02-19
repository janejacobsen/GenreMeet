(function() {

    angular
        .module('genreMeet')
        .controller('registerCtrl', registerCtrl);

    registerCtrl.$inject = ['$scope', '$http']
    function registerCtrl ($scope, $http) {
      $scope.firstName = "";
      $scope.lastName = "";
      $scope.username = "";
      $scope.password = "";

        function submit() {
          $http.get()
        }
    };

})();
