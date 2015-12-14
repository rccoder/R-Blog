var Class = require('../models').Class;

exports.addClass = function (data) {
    return Class.create(data);
};

exports.getClassByName = function (name) {
    return Class.find({name: name}).exec();
}