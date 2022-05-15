const e=require("express")
var express=require("express");
const req = require("express/lib/request");

var router=express.Router();

const credential={
    email:"tushant8853@gmail.com",
    password:"admin123"
}

router.post('/login',(req,res)=>{
    if (req.body.email==credential.email && req.body.password==credential.password){
        req.session.user=req.body.email;
        res.end("hip hip hurry")
    }
    else{
        res.end("Invalid")
    }
});

router.post('/Sign_Up',(req,res)=>{
        res.end('Sign_Up')
});


module.exports=router;
