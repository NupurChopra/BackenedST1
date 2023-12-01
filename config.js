const mongoose=require("mongoose");
const connect=mongoose.connect("mongodb+srv://nupurchopra003:nupur2003@cluster0.j6fywo1.mongodb.net/login");

connect.then(() => {
    console.log("Database connected Successfully");
})
.catch(() =>{
    console.log("Database not connected ");
})
const LoginSchema=new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    }
});
const collection= new mongoose.model("users",LoginSchema);
module.exports = collection;
