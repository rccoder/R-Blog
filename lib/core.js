var User = require('./user');
var Post = require('./post');
var Tag = require('./tag');
var Class = require('./class');

module.exports = function () {
    get $User () {
        return User;
    },
    get $Post () {
        return Post;
    },
    get $Tag () {
        return Tag;
    },
    get $Class() {
        return Class;
    }

};