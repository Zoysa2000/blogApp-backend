const express = require("express");
const Blog = require("../Database/Model/createBlog");
const router = express.Router();


router.get('/:id',async(req,res)=>
{
    try {
        const blog = await Blog.findById(req.params.id); // Retrieve all comments
        const userComments = blog.blogCommment;
       res.status(200).json({data:{
        userComments
       }})
    } catch (error) {
        res.status(500).json({ message: error.message }); 
    } 
})


module.exports=router;