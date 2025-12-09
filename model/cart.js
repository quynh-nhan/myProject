const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const cartScheme = new Schema({
    UserID: {
        type: ObjectId,
        ref: "user",
        required: true
    },
    ProductID: {
        type: ObjectId,
        ref: "product",
        required: true
    },
    quantity: {
        type: Number,
        default: 1,
        min: 1
    },
    price: {
        type: Number,
        required: true
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.models.cart || mongoose.model('cart', cartScheme);
