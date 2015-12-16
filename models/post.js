var mongoose = require('mongoose');
var Schema = mongoose.Schema;

ObjectId = Schema.ObjectId;

var PostSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now },
    pv: { type: Number, default: 0 },
    class_id: { type: ObjectId, required: true },
    tag_id: { type: ObjectId, required: true },
    user_id: { type: ObjectId, required: true },
});

PostSchema.index({date: -1});

module.exports = mongoose.model('Post', PostSchema);