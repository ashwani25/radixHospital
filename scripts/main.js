    $(function(){
        // console.log("hi");
         var doctorLists = new Array(4);
        doctorLists["empty"] = [""];
        // doctorLists["gynaecology"] = ["", "Dr. Renu Malik", "Dr. Vaishali Saini", "Dr. Santosh Sachdeva"];
        // doctorLists["ophthamology"] = ["", "Dr. Nidhi Gupta"];
        // doctorLists["cosmetology"] = ["", "Dr. Jinender Jain", "Dr. Nitish Singhal"];
        // doctorLists["ent"] = ["", "Dr. AK Lahri", "Dr. SK gupta"];
        // doctorLists["medicine"] = ["", "Dr. A.S Talwar", "Dr. Hemant Shah Jain", "Dr. Alok Jain", "Dr. Parul Khurana"];
        // doctorLists["orthopaedics"] = ["", "Dr. Samresh Mohan"];
        // doctorLists["surgery"] = ["", "Dr. Dharmendra Singh", "Dr. Ajay Singh", "Dr. Pradeep Saini"];
        // doctorLists["paediatrics"] = ["", "Dr. Ravi Malik", "Dr. Dharmendra Singh", "Dr. Amit Kumar"];
        doctorLists["dentistry"] = ["", "Dr. Shruti Malik"];
      

        
         $('#department').on('change', function() {
  //array of possible doctors in the same order as they appear in the doctor selection list 
        /* doctorChange() is called from the onchange event of a select element. 
         * param selectObj - the select object which fired the on change event. 
         */
        // function doctorChange(selectObj) {
            //get the index of the selected option 
            // var selectObj=this.;
            // var idx = selectObj.selectedIndex;
            //get the value of the selected option 
            // var which = selectObj.options[idx].value;
            var which=this.value;
            //use the selected option value to retrieve the list of items from the doctorLists array 
            dList = doctorLists[which];
            //get the doctor select element via its known id 
            var dSelect = document.getElementById("doctor");
            //remove the current options from the doctor select 
            var len = dSelect.options.length;
            while (dSelect.options.length > 0) {
                dSelect.remove(0);
            }
            var newOption;
            //create new options 
            for (var i = 0; i < dList.length; i++) {
                newOption = document.createElement("option");
                newOption.value = dList[i]; // assumes option string and value are the same 
                newOption.text = dList[i];
                //add the new option 
                try {
                    dSelect.add(newOption); // this will fail in DOM browsers but is needed for IE 
                } catch (e) {
                    dSelect.appendChild(newOption);
                }
            }
        //}
  });
      //array of possible doctors in the same order as they appear in the doctor selection list 
        var timeSlots = new Array(20);
        timeSlots["empty"] = [""];
        timeSlots["Dr. Shruti Malik"] = ["", "9:00", "9:15", "9:30", "10:00", "10:15", "10:30", "10:45", "11:00",
            "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00"
        ];
        timeSlots["Dr. Renu Malik"] = ["", "9:00", "9:15", "9:30", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15",
            "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00"
        ];
        timeSlots["Dr. Vaishali Saini"] = ["", "9:00", "9:15", "9:30", "10:00", "10:15", "10:30", "10:45", "11:00",
            "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00"
        ];
        timeSlots["Dr. Santosh Sachdeva"] = ["", "9:00", "9:15", "9:30", "10:00", "10:15", "10:30", "10:45", "11:00",
            "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00"
        ];
        timeSlots["Dr. Ravi Malik"] = ["", "9:00", "9:15", "9:30", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15",
            "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00"
        ];
        timeSlots["Dr. Dharmendra Singh"] = ["", "9:00", "9:15", "9:30", "10:00", "10:15", "10:30", "10:45", "11:00",
            "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00"
        ];
        timeSlots["Dr. Amit Kumar"] = ["", "9:00", "9:15", "9:30", "10:00", "10:15", "10:30", "10:45", "11:00", "11:15",
            "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00"
        ];
        $("#doctor").on("change",function(){
            //get the value of the selected option 
            var which = this.value;
            //use the selected option value to retrieve the list of items from the doctorLists array 
            tList = timeSlots[which];
            //get the doctor select element via its known id 
            var tSelect = document.getElementById("timeslot");
            //remove the current options from the doctor select 
            var len = tSelect.options.length;
            while (tSelect.options.length > 0) {
                tSelect.remove(0);
            }
            
            var newOption;
            //create new options 
            for (var i = 0; i < tList.length; i++) {
                newOption = document.createElement("option");
                newOption.value = tList[i]; // assumes option string and value are the same 
                newOption.text = tList[i];
                //add the new option 
                try {
                    tSelect.add(newOption); // this will fail in DOM browsers but is needed for IE 
                } catch (e) {
                    tSelect.appendChild(newOption);
                }
            }
        });

    
    });
        
            
 
       
       