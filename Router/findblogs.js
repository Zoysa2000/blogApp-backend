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

router.put("/:id", async (req, res) => {
    try {
        console.log("Received Blog ID:", req.params.id); // ✅ Logs ID in the backend terminal
        console.log("Received Body Data:", req.body); // ✅ Logs the content received
        const { content } = req.body; // Ensure content is received
        if (!content) {
            return res.status(400).json({ error: "Content is required" });
        }

        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            { content },
            { new: true } // Return updated blog
        );

        if (!updatedBlog) {
            return res.status(404).json({ error: "Blog not found" });
        }

        res.status(200).json({ message: "Blog updated successfully", data: updatedBlog });
    } catch (error) {
        console.error("Update Error:", error);
        res.status(500).json({ message: error.message });
    }
});





module.exports = router;