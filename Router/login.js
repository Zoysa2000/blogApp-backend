const express=require("express")
const Register=require("../Database/Model/userReg")

const router=express.Router();

router.post("/", async(req,res)=>
{
try{
const {username,password}=req.body;
const user=await Register.findOne({'username':username})
if(!user)
{
 res.status(201).json({errormessage:"Invalid username or password. Please try again."})
}
const userPass=await Register.findOne({'password':password})
if(!userPass)
{
 res.status(201).json({errormessage:"Invalid username or password. Please try again."})
}
else{
res.status(200).json({donemessage:"userFind", data:{
user 
}})
}
}
catch (error){
console.log(error)
}

})

module.exports = router;