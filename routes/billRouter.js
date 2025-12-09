var express = require("express");
var router = express.Router();
var bill = require("../model/bill");
var billdetail= require("../model/billDetail")
// tao hoa don
router.post("/add-bill", async (req,res)=>{
    try{
        const {quanlity,UserID,detail} = req.body;
        const CreatAt= new Date();
        const detailsArray = [];
        detail.forEach(item => {
        detailsArray.push({
            productID: item.productID,
            Quantity: item.quantity,
            Price:item.price
        });
        });
        await bill.create({quanlity,UserID,CreatAt,detail});
        await billdetail.create(detailsArray);
        res.status(200).json({status:true,message:"Thành công"});
    }catch(e){
        res.status(400).json({status:false,message:"Không thành công: "+e});
    }
});
// lay hoa don
router.get("/all", async function(req,res) {
    const UserID = req.query.UserID;
    const list = await bill.find( {UserID});
    res.status(200).json({status:true,message:"thanh cong",data:list})
  });
    module.exports=router;