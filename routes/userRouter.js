var express = require("express");
var router = express.Router();
var User = require("../model/user");

router.post("/add-user", async (req,res)=>{
    try{
        const {email,password} = req.body;
        await User.create({email,password});
        res.status(200).json({status:true,message:"Thành công"});
    }catch(e){
        res.status(400).json({status:false,message:"Không thành công: "+e});
    }
});
router.post("/login", async function(req,res){
    const { email, password } = req.body;

    const user = await User.find({ 
        email: email,
        password: password
    });

    if(!user){
        return res.status(400).json({
            status:false,
            message:"Sai tài khoản hoặc mật khẩu"
        });
    }

    res.json({
        status:true,
        message:"Đăng nhập thành công",
        data:user
    });
});
// update user 
router.put("/update-user", async function(req,res){
    const{id,email,password}= req.body;
    
        const item = await User.findById(id);
        // const item2 = await productRouterr.find({_id:id})
        if(item){
            // update
            item.email= email ? email: item.email;
            item.password= password? password:item.password;
            await item.save();
            res.status(200).json({status:true,message:"cap nhat thanh cong"})
        }else{
            res.status(200).json({status:false,message:"Khong tim thay san pham"})
        }
 });
module.exports = router;
