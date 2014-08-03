var express      = require('express');
var mongoose     = require('mongoose');
var path         = require('path');
var favicon      = require('static-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var fs           = require('fs');

// added config dir to NODE_PATH in start script - use npm start
var config       = require('config');
var routes       = require('index');
var users        = require('users');
var quiz         = require('quiz');

var app = express();

var housekeeper = require('./housekeeper');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

//middlewares
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', routes);
app.use('/users', users);
app.use('/quiz', quiz);

housekeeper(app);

// Connect to mongodb
var connect = function () {
	var options = { server: { socketOptions: { keepAlive: 1 } } };
	console.log(' connecting to db at: ' + config.db);
	mongoose.connect(config.db, options);
};
connect();

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

// Bootstrap models
fs.readdirSync(__dirname + '/models').forEach(function (file) {
	if (~file.indexOf('.js')) require(__dirname + '/models/' + file);
});

var port = process.env.PORT || 8080;
var router = express.Router();

app.listen(port);
console.log('Listening on port ' + port);

module.exports = app;
