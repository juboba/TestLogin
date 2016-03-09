angular.module('testApp', ['ngMockE2E'])
    .run(['$httpBackend', function($httpBackend){
        $httpBackend.whenPOST('/login')
        .respond(function(method, url, data){

            var request = JSON.parse(data);

            if (request.password == 'password') {
                return [400, {message: 'Password cannot be "password"'}];
            }

            return [200, {message: 'Login successful!'}];
        });
    }]);
