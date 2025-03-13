const express=require("express")
const Register=require("../Database/Model/userReg")


const router=express.Router();

router.post("/",async(req,res)=>
{
 try{
const{userId,comment,username}=req.body;
const user=await Register.findById(userId)
user.Usercomment.push({"comment":comment,"commentUser":username});
await user.save();
res.status(200).json({ message: 'Comment added successfully', data:{
    user
} });
 }  
 catch(error)
 {
console.error(error);
res.status(500).json({message:"Comment is not add"})
 } 

})

router.get("/",async(req,res)=>
{
    try {
        const comments = await Register.find(); // Retrieve all comments
        const userComments = comments.map(comment => comment.Usercomment); // Extract Usercomment array from each comment
        res.status(200).json({data:{
        userComments
       }})
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    } 
})

module.exports=router;