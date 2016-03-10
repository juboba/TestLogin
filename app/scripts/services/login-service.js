angular.module('testApp')

.service('Login', ['$http', '$q', function($http, $q){
    this.make = function(email, password){
        var defer = $q.defer();

	if (!password || password.length < 8) {
	    defer.reject({
		message: 'Password must be at least 8 characters long.'
	    });

	    return defer.promise;
	}

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
