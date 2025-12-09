const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const billScheme = new Schema({
    id:{
        type:ObjectId
    },
    CreatAt:{
        type: Date
    },
    UserID:{
        type:ObjectId,
        ref:"user"
    },
    quanlity:{
        type:Number
    },
    detail:
     [
        {
            productID: { type: Schema.Types.ObjectId, ref: "product" },
            Quantity: { type: Number, required: true },
            Price: { type: Number }
        }
    ]
});
module.exports = mongoose.models.bill || mongoose.model('bill', billScheme);
// category -----> categories
