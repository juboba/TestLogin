describe('Login tests', function(){
    beforeEach(module('testApp'));

    var Login, $rootScope;

    beforeEach(inject(function(_Login_, _$rootScope_){
        Login = _Login_;
        $rootScope = _$rootScope_;
    }));

    describe('Login tests', function(){

        it('should not allow a password with less than 8 characters', function(){
	    var email = 'joe@domain.com';
	    var password = '1234';

	    Login.make(email, password)
		.then(function(res){
		    //expect(res).toBe(true);
		}, function(res){
		    //expect(res).toBe(true);
		});

	    $rootScope.$apply();

	    expect(false).toBe(true);

        });

	/*
        it('should not allow login if the email is not well formatted', function(){
            var $scope = {};
            var controller = $controller('loginController', {$scope: $scope});
            var result = false;

            $scope.email = 'myuser';
            $scope.password = '12345678';

            result = $scope.validate();

            expect(result).toBe(false);
        });

        it('should not allow the login of password with value "password"', function(){
            var $scope = {};
            var controller = $controller('loginController', {$scope: $scope});
            var result = false;

            $scope.email = 'valid@mail.com';
            $scope.password = 'password';

            result = $scope.validate();

            expect(result).toBe(false);
        });

        it('should allow the login of a valid email and password', function(){
            var $scope = {};
            var controller = $controller('loginController', {$scope: $scope});
            var result = false;

            $scope.email = 'valid@mail.com';
            $scope.password = '12345678';

            result = $scope.validate();

            expect(result).toBe(true);
        });
	*/
    });

});
