const mongoose = require("mongoose");
const blogcommentSchema=require("../Model/blogComment")
const blogSchema=new mongoose.Schema({
username:
{
    type:String,
    required:true 
},
 title:
 {
    type:String,
    required:true  
 },

 imagePath:
 {
    type:String,
    required:true
 },
 
 content:
 {
    type:String,
    required:true   
 },
 rate: [{
   type: Number
 }],
 date: {
   type: Date,
   default: Date.now,
   get: function() {
       const date = new Date(this.valueOf()); // Create a new Date object based on the current value
       // Get the date in YYYY.MM.DD format
       return `${date.getFullYear()}.${this.getDateInTwoDigits(date.getMonth() + 1)}.${this.getDateInTwoDigits(date.getDate())}`;
     }
 },
 blogCommment:[blogcommentSchema]

})

const Blog=mongoose.model('Blogs',blogSchema,'blogs')

module.exports=Blog;

