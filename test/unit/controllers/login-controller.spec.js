describe('Login tests', function(){
    beforeEach(module('testApp'));

    var Login, $rootScope, $controller;

    beforeEach(inject(function(_Login_, _$rootScope_, _$controller_){
        Login = _Login_;
        $rootScope = _$rootScope_;
        $controller = _$controller_;
    }));

    it('should call Login->make', function(){
        var $scope = {};

        spyOn(Login, 'make').and.callThrough();

        var loginController = $controller('loginController', {$scope: $scope});

        $scope.email = 'joe@domain.com';
        $scope.password = 'anypassword';

        $scope.login();

        expect(Login.make).toHaveBeenCalled();
    });
});
