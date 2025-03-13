const express = require("express");
const Blog = require("../Database/Model/createBlog");
const router = express.Router();


router.post("/",async(req,res)=>
{
  try{
    const {username}=req.body;
 const blogs=await Blog.find({"username":username})
 res.status(200).json({data:{
  blogs
 }})
  }
  catch{
    res.status(500).json({ message: error.message })
  }
})

router.delete("/:id",async(req,res)=>
{
  try{
  const blogs=await Blog.findByIdAndDelete(req.params.id)
  if (!blogs) {
    return res.status(404).json({ error: 'Item not found' });
  }
  res.status(200).json({messgae:"Blog is successfully deleted"})
  }
  catch{
    res.status(500).json({ message: error.message })
  }
})



module.exports = router;