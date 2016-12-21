var config       = require('config');
var mongoose     = require('mongoose');
var fs           = require('fs');

// setup mongoose
function database(app) {

    if (typeof config.db == 'undefined' || config.db.length == 0) {
        console.log('\nNo database configured - check config/env/%s.js\n',
                process.env.NODE_ENV);
        process.exit(-1);
    }

    var connectAttempts = 1;
    // Connect to mongodb
    var connect = function (attempt) {
        console.log('connection attempt %d', attempt);
        if (connectAttempts > 10) {
            console.error('Attempted connect %d times, giving up. Check config/env/%s.js', 
                    --connectAttempts, process.env.NODE_ENV);
            process.exit(1);
        }
        var options = { server: { socketOptions: { keepAlive: 1 } } };
        console.log(' connecting to db at: %s', config.db);
        mongoose.connect(config.db, options);
    };

    connect(connectAttempts);

    mongoose.connection.on('error', function(err) {
        console.log('  on.error: %s', err);
        connect(connectAttempts++);
    });
    mongoose.connection.on('disconnected', function(err) {
        console.log('  on.disconnected: %s', err);
        connect(connectAttempts++);
    });
    mongoose.connection.on('connected', function(err) {
        console.log(' the mongoose has landed.');
        connectAttempts = 0;
    });        
    // Bootstrap models
    fs.readdirSync(__dirname + '/models').forEach(function (file) {
        if (~file.indexOf('.js')) require(__dirname + '/models/' + file);
    });
}
module.exports = database;
