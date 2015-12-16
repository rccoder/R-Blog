var mongoose = require('mongoose');
var db = require('../config/db');

var url = 'mongodb://' + db.host + '/' + db.db_name;

mongoose.connect(url, function (err) {
    if (err) {
        console.log('connect to %s error:', url, err.message);
        process.exit(1);
    }
});

exports.User = require('./user');
exports.Post = require('./post');
exports.Tag = require('./tag');
exports.Class = require('./class');