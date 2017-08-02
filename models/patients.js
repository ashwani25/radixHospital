var mongoose=require("mongoose");
var doctor=require("./doctors");
var patientsSchema=new mongoose.Schema({
    name:String,
    contact:Number,
    doctor:{
        
        
             type:mongoose.Schema.Types.ObjectId,
             ref:"doctor"
    },
        
 date:Date,
 time:String
}); 
module.exports=mongoose.model("patient",patientsSchema);