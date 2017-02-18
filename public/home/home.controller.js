(function() {

    angular
        .module('cenApp')
        .controller('homeCtrl', homeCtrl);

    function homeCtrl () {
        console.log('Home controller is running');
    };

})();