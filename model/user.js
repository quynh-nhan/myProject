const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userScheme = new Schema({
    UserID: {
        type: ObjectId
    },
    email: {
        type: String
    },
    password: {
        type: Number
    }
});

module.exports = mongoose.models.user || mongoose.model('user', userScheme);
