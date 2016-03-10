describe('Login tests', function(){
    var Login, $rootScope, $http, handler;

    beforeEach(module('testApp'));

    beforeEach(inject(function(_$http_, _Login_, _$rootScope_){
        $http = _$http_;
        Login = _Login_;
        $rootScope = _$rootScope_;
    }));

    it('should not allow a password with less than 8 characters', function(){
        var email = 'joe@domain.com';
        var password = 'short';
        var result;

        spyOn($http, 'post');
        
        Login.make(email, password)
            .then(function(res){
                result = res;
            }, function(tre){
                result = tre;
            });

        $rootScope.$apply();

        expect($http.post).not.toHaveBeenCalled();

        expect(result.message).toBe('Password must be at least 8 characters long.');
    });

    it('should not allow the login of password with value "password"', function(){
        var email = 'joe@domain.com';
        var password = 'password';

        var result;

        var error = {data: {message: 'Password cannot be "password"'}};

        spyOn($http, 'post').and.callFake(function(url, params){
            return {
                then: function(success_callback, error_callback){
                    return error_callback(error);
                }
            };
        });
        
        Login.make(email, password)
            .then(function(res){
                result = res;
            }, function(tre){
                result = tre;
            });

        $rootScope.$apply();

        expect($http.post).toHaveBeenCalled();

        expect(result.message).toBe(error.data.message);
    });


});
