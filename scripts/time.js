var doctor = require("../models/doctors");
var time=document.getElementById(timeslot);
console.log(time);
function doctorTime(){
    console.log(time.value);
    console.log("doctor time changed");
}