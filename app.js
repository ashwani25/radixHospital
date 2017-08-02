var express=require("express");
var mongoose=require("mongoose");
var bodyParser=require("body-parser");
var doctor=require("./models/doctors");
var patient=require("./models/patients");
var app=express();
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb://localhost/hospital_system");
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("home");
});
app.get("/appointment",function(req,res){
   
        res.render("appointment");
        
    
});
app.post("/appointment",function(req,res){
    var name=req.body.name;
    var contact=req.body.contact;
    var bus=req.body.cars;
    var DoctorName=req.body.DoctorName;
    
    
    var date=req.body.date;
    var time=req.body.time;
    var newDoctor={DoctorName:DoctorName,department:bus};
    var newPatient={name:name,contact:contact,date:date,time:time};
    patient.create(newPatient,function(err,Patient){
        if(err){
            console.log(err);
        }else{
            Patient.save();
        }
    });
    doctor.create(newDoctor,function(err,Doctor){
        patient.findOne({contact:contact},function(err,foundPatient){
            if(err){
                console.log(err);
            }else{
                foundPatient.doctors.push(Doctor);
                foundPatient.save(function(err,data){
                    if(err){
                        console.log(err);
                    }else{
                        //console.log(data);
                        patient.findOne({contact:contact}).populate("doctors").exec(function(err,Patient){
                                                if(err){
                                                    console.log(err);
                                                }else{
                                                    console.log(Patient);
                                                }
                                            });
                        res.redirect("/appointment");
                    }
                })
            }
        })
    });
    
});

app.listen(3000,function(req,res){
    console.log("server started");
});