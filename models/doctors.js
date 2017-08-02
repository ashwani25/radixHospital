var mongoose=require("mongoose");
var doctorsSchema=new mongoose.Schema({
    DoctorName:String,
    department:String
});
module.exports=mongoose.model("doctor",doctorsSchema);