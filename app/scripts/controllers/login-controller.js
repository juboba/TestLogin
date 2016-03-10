angular.module('testApp')

.controller('loginController', ['$scope', 'Login', function($scope, Login){
    $scope.login = function(){

        Login.make($scope.email, $scope.password)
        .then(
        function(response){
            $scope.message = response.message;
            $scope.errors = [];
        },
        function(response){
            $scope.errors = response;
            $scope.message = '';
        });

    };
}]);
