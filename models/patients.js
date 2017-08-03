var mongoose=require("mongoose");
var doctor=require("./doctors");
var patientsSchema=new mongoose.Schema({
    name:String,
    contact:Number,
    doctors:[{
        
        
             type:mongoose.Schema.Types.ObjectId,
             ref:"doctor"
             
    }],
        
 token:Number
}); 
module.exports=mongoose.model("patient",patientsSchema);