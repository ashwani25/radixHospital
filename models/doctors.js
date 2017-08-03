var mongoose=require("mongoose");
var doctorsSchema=new mongoose.Schema({
    DoctorName:String,
    department:String,
    time:String,
    date:Date
});
module.exports=mongoose.model("doctor",doctorsSchema);