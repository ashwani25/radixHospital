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
   
    var name=req.body.name;
    var contact=req.body.contact;
    var bus=req.body.cars;
    var DoctorName=req.body.DoctorName;
    
    var date=req.body.date;
    var date=date.toString();

    var time=req.body.time;
     req.checkBody('name', 'Invalid name').isAlpha().notEmpty();
     req.checkBody('contact', 'Invalid contact no.').notEmpty().isInt();
     req.checkBody("bus","Invalid department").isEmpty();
     req.checkBody("DoctorName","Invalid DoctorName").notEmpty(); 
     req.checkBody("date","Invalid date").notEmpty();
     req.checkBody("time","Invalid time").notEmpty();    
    
     var errors = req.validationErrors();
  if (errors) {
    req.flash("error","Please make sure every field is filled correctly.");
   res.redirect("/appointment");
    return;
  }else{
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
                    req.flash("success","Hello "+Patient.name+"!! your token no. is "+Patient.token+". Your appointment is scheduled with "+req.body.DoctorName+" on "+req.body.date.toString()+" at "+req.body.time+".");
                        res.redirect("/appointment");
                                                  
                                                }
                                            });
          
                        
                    }
                });
            }
        });
        }
    });
    }                                        
        });


});
  }
});


app.get("*",function(req,res){
    res.send("sorry page not found:(");
});

app.listen(3000,function(req,res){
    console.log("server started");
});