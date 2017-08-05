var mongoose=require("mongoose");
var doctorsSchema=new mongoose.Schema({
    DoctorName:String,
    department:String,
    time:String,
    date:String
});
module.exports=mongoose.model("doctor",doctorsSchema);