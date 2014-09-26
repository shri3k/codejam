// module.exports = function(passport) {

    var express = require('express');
    var router = express.Router();

    function Login(req, res) {
        res.render('login',  { desc:'Please login or sign up.', message: req.flash('loginMessage')}) 
    }

    function Logout(req, res) {
        req.logout();
        res.redirect('/');     
    }

    function ShowSignup(req, res) {
        res.render('signup', { desc:'Please sign up.', message: req.flash('signupMessage')}) 
    }

    function ShowProfile(req, res) {
        res.render('profile',{ user: req.user })
    }

    function Signup(req, res) {
        console.log('\n***Signup POST...\n');
        passport.authenticate('local-signup', {
            successRedirect : '/profile',
            failureRedirect : '/signup', 
            failureFlash    : true
        });
    }

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/');
    }

    router.get ('/logout',  Logout)
          .get ('/login',   Login)
          .get ('/signup',  ShowSignup)
          .get ('/profile', isLoggedIn, ShowProfile)
          .post('/signup',  Signup);

    module.exports = router;
// }



