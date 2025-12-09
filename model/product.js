const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const product = new Schema({
    id: { type: ObjectId }, // khóa chính
    name: {
        type: String, // kiểu dữ liệu
    },
    description:{type:String},
    price:{type:Number},
    quantity:{type :Number},
    CreateAt:{type:Date},
    cateID:{type:ObjectId,ref:"category"}
    
});
module.exports = mongoose.models.product || mongoose.model('product', product);