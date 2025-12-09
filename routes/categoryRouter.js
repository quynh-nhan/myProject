var express = require("express");
var router = express.Router();
var Category = require("../model/category");

router.post("/add-category", async (req,res)=>{
    try{
        const { name } = req.body;
        await Category.create({ name });
        res.status(200).json({status:true,message:"Thành công"});
    }catch(e){
        res.status(400).json({status:false,message:"Không thành công: "+e});
    }
});

module.exports = router;
