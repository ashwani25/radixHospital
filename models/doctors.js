var mongoose=require("mongoose");
var doctorsSchema=new mongoose.Schema({
    name:String,
    speciality:String
});
module.exports=mongoose.model("doctor",doctorsSchema);