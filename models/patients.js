var mongoose=require("mongoose");
var doctor=require("./doctors");
var patientsSchema=new mongoose.Schema({
    name:String,
    address:String,
    contact:Number,
    doctors:[
        {
             type:mongoose.Schema.Types.ObjectId,
             ref:"doctor"
         }
    ]
}); 
module.exports=mongoose.model("patient",patientsSchema);