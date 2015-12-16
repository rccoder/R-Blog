var User = require('./user');
var Post = require('./post');
var Tag = require('./tag');
var Class = require('./class');

var lib = {

    $User: function () {
        return User;
    },

    $Post: function () {
        return Post;
    },

    $Tag: function () {
        return Tag;
    },

    $Class: function () {
        return Class;
    },

};

module.exports = lib;