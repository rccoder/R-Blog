var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TagSchema = new Schema({
    name: { type: String, required: true },
});

module.exports = mongoose.model('User', TagSchema);