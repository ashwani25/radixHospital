var mongoose=require("mongoose");
var tokenSchema=new mongoose.Schema({
   token:Number
});
module.exports=mongoose.model("Token",tokenSchema);