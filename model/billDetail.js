const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const billdetailScheme = new Schema({
   billID:{
        type:ObjectId,ref:'bill'
    },
    productID:{
        type:ObjectId,ref:'product'
    },
    Quantity:{
        type:Number
    },
    Price:{
        type:Number
    }
});
module.exports = mongoose.models.billDetail || mongoose.model('billdetail', billdetailScheme);
// category -----> categories
