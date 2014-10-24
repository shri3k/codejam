var passport = require('passport');
var inherits = require('util').inherits;
var util     = require('util');
 
function MockStrategy(options, verify) {
    this.name = 'mock';
    this.userId = options.userId || 1;
    this.email  = options.email || 'nothing@example.org';
    this.verify = verify;

    this.authenticated = options.authenticated;
}
 
util.inherits(MockStrategy, passport.Strategy);
 
MockStrategy.prototype.authenticate = function authenticate(req) {

    var self = this;
  
    function verified(err, user, info) {
      if (err) { return self.error(err); }
      if (!user) { return self.fail('not verified'); }
      self.success(user, 'verified');
    }

    var user;
    if (this.authenticated) {
        user = { id: this.userId, email: this.email};
    } 

    this.verify(null, user, verified);
}
module.exports = MockStrategy;