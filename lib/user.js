var User = require('../models').User;

exports.addUser = function (data) {
    return User.create(data);
};

exports.getUserById = function (id) {
    return User.findById(id).exec();
}


