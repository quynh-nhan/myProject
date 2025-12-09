const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const billScheme = new Schema({
    CreatedAt: {
        type: Date,
        default: Date.now
    },

    UserID: {
        type: ObjectId,
        ref: "user",
        required: true
    },

    quantity: {
        type: Number,
        default: 0
    },

    detail: [
        {
            productID: { 
                type: ObjectId, 
                ref: "product", 
                required: true 
            },
            Quantity: { 
                type: Number, 
                required: true 
            },
            Price: { 
                type: Number,
                required: true
            }
        }
    ]
});

// KHÔNG tự tạo id — để Mongoose tự sinh _id
module.exports = mongoose.models.bill || mongoose.model('bill', billScheme);
