describe('Login tests', function(){
    beforeEach(module('testApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
        $controller = _$controller_;
    }));

    describe('Login tests', function(){
        var $scope, controller;

        it('should not allow a password with less than 8 characters', function(){
            var $scope = {};
            var controller = $controller('loginController', {$scope: $scope});
            var result = false;

            $scope.email = 'myuser@mymail.mydomain';
            $scope.password = 'mytestpassword';

            result = $scope.validate();

            expect(result).toBe(false);
        });

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
    });

});
