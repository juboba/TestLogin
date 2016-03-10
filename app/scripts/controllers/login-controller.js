angular.module('testApp')

.controller('loginController', ['$scope', 'Login', function($scope, Login){
    $scope.login = function(){

        Login.make($scope.email, $scope.password)
        .then(
        function(response){
            $scope.message = response.message;
        },
        function(errors){
            for(var i in errors){
                alert(errors[i].message);
            }
            $scope.message = '';
        });
        return false;

    };
}]);
