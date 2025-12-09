var express = require("express");
var router = express.Router();
var Cart = require("../model/cart");
router.post("/add-cart", async function(req,res){
        try{
            //UserID,ProductID,quantity,price,CreateAt
            const {UserID,ProductID,quantity,price} = req.body;
            const CreateAt=new Date();
            await Cart.create({UserID,ProductID,quantity,price,CreateAt});
            res.status(200).json({status:true,message:"Thành công"});
        }catch(e){
            res.status(400).json({status:false,message:"Không thành công: "+e});
        }

    res.json({
        status:true,
        message:"Đã thêm vào giỏ hàng",
        data:Cart
    });
});

    module.exports=router;