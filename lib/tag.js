var Tag = require('../models').Tag;

exports.addTag = function (data) {
    return Tag.create(data);
};

exports.getTagByName = function (name) {
    return Tag.find({name: name}).exec();
};

