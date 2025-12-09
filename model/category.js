const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const cateScheme = new Schema({
    id:{type:String},
   name:{type:String},
});
module.exports = mongoose.models.category || mongoose.model('category', cateScheme);
// category -----> categories
