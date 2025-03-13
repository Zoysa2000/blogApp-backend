const mongoose=require("mongoose")
const commentSchema = require("./userComment");

const RegisterSchema=new mongoose.Schema({
username:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
confirmPassword:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
Usercomment:[commentSchema],
})

const Register=mongoose.model('Users',RegisterSchema,'users')

module.exports=Register;