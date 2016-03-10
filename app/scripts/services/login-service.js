angular.module('testApp')

.service('Login', ['$http', '$q', function($http, $q){
    this.make = function(email, password){
        var defer = $q.defer();
        var errors = [];

        var email_format = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;

        if (!email || !email_format.test(email)) {
            errors.push({
                message: 'Email is not valid.'
            });
        }

	if (!password || password.length < 8) {
            errors.push({
		message: 'Password must be at least 8 characters long.'
	    });
	}

        if(errors.length === 0){
            $http.post('/login', {
                email: email,
                password: password
            })
            .then(function(response){
                defer.resolve(response.data);
            }, function(response){
                defer.reject([response.data]);
            });
        } else {
            defer.reject(errors);
        }

        return defer.promise;
    };
}]);
