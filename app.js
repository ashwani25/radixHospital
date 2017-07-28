var express=require("express");
var mongoose=require("mongoose");
var doctor=require("./models/doctors");
var patient=require("./models/patients");
var app=express();
mongoose.connect("mongodb://localhost/hospital_system");
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("home");
});
app.get("/appointment",function(req,res){
   
        res.render("appointment");
    
});

app.listen(3000,function(req,res){
    console.log("server started");
})