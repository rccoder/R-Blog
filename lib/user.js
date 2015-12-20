var User = require('../models').User;

exports.addUser = function (data) {
    return User.create(data);
};

exports.getUserById = function (id) {
    return User.findById(id).exec();
}

exports.getUserByName = function (name) {
    return User.findOne({name: name}).exec();
}

exports.getAllUser = function () {
    return User.find({}).exec();
}