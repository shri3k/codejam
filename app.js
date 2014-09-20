var express      = require('express');
var path         = require('path');
var favicon      = require('static-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var passport     = require('passport');
var flash        = require('connect-flash');
var session      = require('express-session');
var errorhandler = require('errorhandler');

var app = express();

// config & routes
var config       = require('config');
var routes       = require('index');
var quiz         = require('quiz');
var users        = require('users');
var housekeeper  = require('./housekeeper');
var database     = require('./database');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

//middlewares
app.use(favicon());
app.use(logger(config.logFormat));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// passport, yo
app.use(session({ secret: 'thisshouldbeextractedoutlater', saveUninitialized: true, resave: true })); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash());
// initialize Passport
require('passconfig')(passport);

// routes
app.use('/', routes);
var authRoutes = require('./routes/login');
authRoutes(app, passport);

app.use('/quiz', quiz);

// housekeeper(app);
app.use(errorhandler({ dumpExceptions: true, showStack: true }));

database(app);

module.exports = app;
