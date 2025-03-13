const mongoose=require("mongoose")

const connectDB=(url)=>
{
    mongoose.set('strictQuery',true);
    mongoose.connect(url)
    .then(()=>console.log("MongoDB is connected"))
    .catch(()=>console.log("Not connected"))
}

module.exports=connectDB;