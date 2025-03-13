const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const apiRoutes = require("./openAI/chatgptAPI");
const postRegister=require("./Router/register")
const login=require("./Router/login")
const comment=require("./Router/comment")
const blog=require("./Router/blogs")
const myblog=require("./Router/findblogs")
const rate=require("./Router/rating")
const blogComment=require("./Router/blogComment")
const fetchComment=require("./Router/fetchComment")
const connectDB=require("./Database/connect")
require("dotenv").config();
connectDB(process.env.MONGODB_URL);
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Include API routes for use server.js
app.use(apiRoutes);
app.use("/register",postRegister);
app.use("/login",login)
app.use("/addComment",comment)
app.use("/getComment",comment)
app.use("/blogs",blog)
app.use("/getBlogs",blog)
app.use("/getMyblogs",myblog)
app.use("/delete",myblog)
app.use("/rate",rate)
app.use("/ratevalue",rate)
app.use("/blogComment",blogComment)
app.use("/bloginfo",blogComment)
app.use("/fetchComment",fetchComment)
app.use("/uploads",express.static("uploads"))

const port = 5555;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});