(function() {

  angular
    .module('genreMeet')
    .controller('findConcertsCtrl', findConcertsCtrl);
      findConcertsCtrl.$inject = ['$scope', '$http']
    function findConcertsCtrl ($scope, $http) {
      $scope.location = "";


    function submit() {
      $http.get()
    }
  };

})();
