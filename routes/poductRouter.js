var express = require("express");
var router = express.Router();
var Product = require("../model/product");
router.post("/add-product", async function (req, res) {
  try {
    // nhan/lay du lieu
    const { name, description, price, quantity, cateID } = req.body;
    const CreateAt = new Date();
    // tao object luu db
    const newProduct = { name, description, price, quantity, CreateAt, cateID };

    // luu object vao db
    await Product.create(newProduct);
    res.status(200).json({ status: true, message: "Thanh cong" });
  } catch (e) {
    res.status(400).json({ status: false, message: "khong thanh cong " + e });
  }
});
// get all theo danh muc
router.get("/all", async function (req, res) {
  const list = await Product.find({}, "name description price").populate(
    "cateID"
  );
  res.status(200).json({ status: true, message: "thanh cong", data: list });
});
// chi tiết sp
router.get("/product-infor", async function (req, res) {
  const list = await Product.findById(req.params.id);
  res.status(200).json({ status: true, message: "thanh cong", data: list });
});
// theo tên
router.get("/all", async function (req, res) {
  const list = await Product.find({ name: { $regex: "...", $options: "i" } });
  res.status(200).json({ status: true, message: "thanh cong", data: list });
});
// xoa sp
 router.delete("/delete", async function (req,res) {
     const{id} = req.query;
     const item = await Product.findById(id);
     if(item){
         await Product.findByIdAndDelete(id);
          res.status(200).json({status:true,message:"xoa thanh cong"})
     }else{
         res.status(200).json({status:false,message:"Khong tim thay san pham"})
     }
  });
module.exports = router;
