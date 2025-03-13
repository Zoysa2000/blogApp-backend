const express = require("express");
const Blog = require("../Database/Model/createBlog");
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dest = "./uploads";
    // Create the directory if it does not exist
    fs.mkdirSync(dest, { recursive: true });
    cb(null, dest);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const upload = multer({ storage });

router.post("/", upload.single('imagePath'), async (req, res) => {
  try {
    const { username, title, content } = req.body;
    const imagePath = req.file.path; // Path to the uploaded file
    const image = new Blog({
      username,
      title,
      content,
      imagePath
    });
    await image.save();
    res.status(201).send({ message: 'Congratulations your blog is posted' });
  } catch (err) {
    console.error(err);
    res.status(500).send( {errormessage : 'Blog is not post'});
  }
});

router.get("/",async(req,res)=>
{
  try{
    const blogs= await Blog.find();
    res.status(200).json({data:{
      blogs
    }})

  }
  catch{
    res.status(500).json({ message: error.message })
  }
})



module.exports = router;