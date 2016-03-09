angular.module('testApp')

.service('Login', ['$http', '$q', function($http, $q){
    this.make = function(email, password){
        var defer = $q.defer();

        $http.post('/login', {
            email: email,
            password: password
        })
        .then(function(response){
            defer.resolve(response.data);
        }, function(response){
            defer.reject(response.data);
        });

        return defer.promise;
    };
}]);
