var express=require("express");
var mongoose=require("mongoose");
var bodyParser=require("body-parser");
var cookieParser = require('cookie-parser');
var expressValidator = require('express-validator');
var flash=require("connect-flash");
var doctor=require("./models/doctors");
var patient=require("./models/patients");
var app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator()); 
mongoose.connect("mongodb://localhost/hospital_system");
app.set("view engine","ejs");
app.use(flash());
app.use(require("express-session")({
    secret: "you're the smartest",
    resave: false,
    saveUninitialized: false
}));
app.use(function(req,res,next){
    res.locals.currentPatient=req.patient;
    res.locals.currentDoctor=req.doctor;
     res.locals.error=req.flash("error");
    res.locals.success=req.flash("success");
    next();
})

app.get("/",function(req,res){
    res.render("home");
});
app.get("/appointment",function(req,res){
        res.render("appointment");
        
    
});
    
app.post("/appointment",function(req,res){
    // req.checkBody('name', 'Invalid name').isAlpha();
    // req.checkBody('contact', 'Invalid contact no.').notEmpty().isInt();
    // req.sanitize('name').escape();
    // req.sanitize('name').trim();
    var name=req.body.name;
    var contact=req.body.contact;
    var bus=req.body.cars;
    var DoctorName=req.body.DoctorName;
    
    var date=req.body.date;
    var date=date.toString();

    var time=req.body.time;
    var newDoctor={DoctorName:DoctorName,department:bus,time:time,date:date};
   
    doctor.create(newDoctor,function(err,Doctor){
       
        Doctor.save();
        doctor.find({},function(err,foundDoctors){
            
                                var count=0;
                                 if(err){
                                        console.log(err);
                                        }else{
                                                             
                                                 foundDoctors.forEach(function(doctors){
                                                 
                                                if(doctors.date===req.body.date.toString()){
                                             
                                                 count=count+1;
                                                 }
                                                                 
                                                 });
     var newPatient={name:name,contact:contact,token:count};
          patient.create(newPatient,function(err,Patient){
        if(err){
            console.log(err);
        }else{
            Patient.save();
            
        patient.findOne({contact:contact},function(err,foundPatient){
            if(err){
                console.log(err);
            }else{
                foundPatient.doctors.push(Doctor);
                foundPatient.save(function(err,data){
                    if(err){
                        console.log(err);
                    }else{
                        patient.findOne({contact:contact}).populate("doctors").exec(function(err,Patient){
                                                if(err){
                                                    console.log(err);
                                                }else{
                                                    console.log(Patient);
                                                  
                                                }
                                            });
                        res.redirect("/appointment");
                    }
                });
            }
        });
        }
    });
    }                                        
        });


});
});

app.get("*",function(req,res){
    res.send("sorry page not found:(");
});

app.listen(3000,function(req,res){
    console.log("server started");
});