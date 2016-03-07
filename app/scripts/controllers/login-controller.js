angular.module('testApp')

.controller('loginController', ['$scope', loginController]);

function loginController($scope){
    $scope.validate = function(){

        if ($scope.password == "password") {
            return false;
        }

        if (/^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/.test($scope.email)) {
            return true;
        }

        if ($scope.password.length < 8) {
            return false;
        }

    };
}
