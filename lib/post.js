var Post = require('../models').Post;

exports.addPost = function (data) {
    return Post.create(data);
};

exports.deletePost = function (id) {
    return Post.remove({id: id});
};

exports.updatePost = function (id, data) {
    return Post.findByIdAndUpdate(id, data);
};

exports.getPostById = function (id) {
    return Post.findByIdAndUpdate(id, {$inc: {pv: 1}}).exec();
};