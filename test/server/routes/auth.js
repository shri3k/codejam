var request   = require("supertest");
var app       = require("app");
var debug     = require('debug')('http');
var mockpass  = require('./mockPassport');

describe("Authentication checks", function() {

    it('should prevent access to the profile page if not authenticated', function(done) {

        var res = request(app).get('/profile');
        res.expect(302, done);
    });

    it('should allow access to the profile page if authenticated', function(done) {

        mockpass(app, {
                authenticated: true,
                userId: 1
        });

        request(app)
            .get('/some-protected-resource')
            .end(function(err, result) {
                if (err) return done(err);
                result.res.statusCode.should.equal(200);
            });        
        done();
    });

});
