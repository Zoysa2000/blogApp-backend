const express = require("express");
const Blog = require("../Database/Model/createBlog");
const router = express.Router();


router.post("/:id",async(req,res)=>
{
try{
const blog=await Blog.findById(req.params.id)
const {username,comment}=req.body;
if(!blog)
{
console.log(error)   
}
else{
blog. blogCommment.push({"username":username,"comment":comment})
await blog.save();
res.status(200).json({message:"Comment is added succussfully",data:{
blog
}})
}
}
catch(error){
console.log(error)
}
})

router.get('/:id',async(req,res)=>
{
try
{
 const blog=await Blog.findById(req.params.id)
 if(!blog)
 {
 res.status(201).json({message:"Blog not find"})
 }
 else{
  res.status(200).json({message:"Blog is find",data:{
  blog
  }})
 }
}
catch{
 console.log(error)
}
})


module.exports=router;
