const express=require("express");

const router=express.Router();

const {isLoggedIn}=require("../middlewares/isLoggedIn")

router.post("/me", isLoggedIn ,(req,res)=>{
   res.status(200).json({success:true,message:"User is authenticated"})
});

module.exports=router;