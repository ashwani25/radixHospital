var mongoose=require("mongoose");
var doctor=require("./doctors");
var patientsSchema=new mongoose.Schema({
    name:String,
    contact:Number,
    Date:String,
    serial_no:Number,
    doctors:[{
        
        
             type:mongoose.Schema.Types.ObjectId,
             ref:"doctor"
             
    }],
        
 token_no:[{
     type:mongoose.Schema.Types.ObjectId,
     ref:"Token"
 }]
 
}); 
module.exports=mongoose.model("patient",patientsSchema);