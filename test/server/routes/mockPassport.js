
var passport     = require('passport')
var MockStrategy = require('./mockStrategy');
 
module.exports = function(app, options) {

    function verified(err, user, info) {
        var self = this;
        if (err) { return self.error(err); }
        if (!user) { return self.fail(info); }
        self.success(user, info);
    }

    passport.use(new MockStrategy(options, verified));
 
    app.get('/some-protected-resource', passport.authenticate('mock'));

};