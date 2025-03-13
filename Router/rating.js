const express = require("express");
const Blog = require("../Database/Model/createBlog");
const router = express.Router();
router.post("/",async(req,res)=>
{
  try {
    const { id, rate } = req.body;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    blog.rate.push(rate);
    await blog.save();
    res.status(200).json({ message: "Rating added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

router.get("/:id",async(req,res)=>
{
  try{
    const blogs=await Blog.findById(req.params.id)
    if (!blogs) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.status(200).json({data:{
      blogs
    }})
    }
    catch{
      res.status(500).json({ message: error.message })
    }  
})


module.exports = router;