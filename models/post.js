var mongoose = require('mongoose');
var Schema = mongoose.Schema;

ObjectId = Schema.ObjectId;

var PostSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
    pv: { type: Number, default: 0 },
    class: { type: String, default: 'None' },
    class_id: {
        type: ObjectId,
        ref: 'Class'
    },
    tag : [{ type: String }],
    tag_id: [{
        type: ObjectId,
        ref: 'Tag'
    }],
    user: { type: String },
    user_id: {
        type: ObjectId,
        ref: 'Tag'
    },
});

PostSchema.index({date: -1});

module.exports = mongoose.model('Post', PostSchema);