//SSI rates

var facts = [
      {  
         year: 2000,
            fbr: 513,
            couple: 769,
            alloc: 256,
            fbr_b: 342.00,
           
           
      },
      {
            year: 2001,
            fbr: 531,
            couple: 796,
            alloc: 265,
            fbr_b: 354.00,
            
           
      },
      {
            year: 2002,
            fbr: 545,
            couple: 817,
            alloc: 272,
            fbr_b: 363.34,
            
           
      },
      {
            year: 2003,
            fbr: 552,
            couple: 829,
            alloc: 277,
            fbr_b: 368.00,
            
           
      },
      {
            year: 2004,
            fbr: 564,
            couple: 846,
            alloc: 282,
            fbr_b: 376.00,
            
           
      },
      {
            year: 2005,
            fbr: 579,
            couple: 869,
            alloc: 290,
            fbr_b: 386.00,
            
           
      },
      {
            year: 2006,
            fbr: 603,
            couple: 904,
            alloc: 301,
            fbr_b: 402.00,
            
 
      },
      {
            year: 2007,
            fbr: 623,
            couple: 934,
            alloc: 311,
            fbr_b: 415.34,
            
           
      },
      {
            year: 2008,
            fbr: 637,
            couple: 956,
            alloc: 319,
            fbr_b: 424.67,
            
 
      },
      {
            year: 2009,
            fbr: 674,
            couple: 1011,
            alloc: 337,
            fbr_b: 449.34,
            
           
      },
      {
            year: 2010,
            fbr: 674,
            couple: 1011,
            alloc: 337,
            fbr_b: 449.34,
            
 
      },
      {
            year: 2011,
            fbr: 674,
            couple: 1011,
            alloc: 337,
            fbr_b: 449.34,
            
           
      },
      {
            year: 2012,
            fbr: 698,
            couple: 1048,
            alloc: 350,
            fbr_b: 465.34,
            
      },
      {
            year: 2013,
            fbr: 710,
            couple: 1066,
            alloc: 356,
            fbr_b: 473.34,
            
           
      },
      {
            year: 2014,
            fbr: 721,
            couple: 1082,
            alloc: 361,
            fbr_b: 480.67,
            
      },
      {
            year: 2015,
            fbr: 733,
            couple: 1110,
            alloc: 367,
            fbr_b: 480.67,
      },
      {
            year: 2016,
            fbr: 733,
            couple: 1110,
            alloc: 367,
            fbr_b: 480.67,
      },
     
];
//New york state supp before 10/01/2014
 
var a = [
    {display: "B", value: "b" }];
   
var b = [
    {display: "F", value: "f" }];
   
var c = [
    {display: "B", value: "b" }];
   
var d = [
    {display: "Z", value: "z" }];
   
 
//New York state supp after 10/01/2014   
var a1 = [
    {display: "Z", value:"z" }];
   
var b1 = [
    {display: "Z", value: "z" }];
   
var c1 = [
    {display: "Z", value: "z" }];
var d1 = [
    {display: "Z", value: "z" }];
   
//California state supp Blind   
var a2 = [
    {display: "B", value:"b" }];
   
var b2 = [
    {display: "D", value: "d" }];
   
var c2 = [
    {display: "E", value: "e" }];
var d2 = [
    {display: "J", value: "j" }];
   
    
//California state supp disabled  
var a3 = [
    {display: "A", value:"a" }];
   
var b3 = [
    {display: "D", value: "d" }];
   
var c3 = [
    {display: "A", value: "a" }];
var d3 = [
    {display: "J", value: "j" }];
 
 
//New Jersey
var a4 = [
    {display: "B", value:"b" }];
   
var b4 = [
    {display: "D", value: "d" }];
   
var c4 = [
    {display: "B", value: "b" }];
 
var d4 = [
    {display: "G", value: "g" }];
 
 
//delaware
   
var b5 = [
    {display: "Z", value: "z" }];
   
var c5 = [
    {display: "Z", value: "z" }];
 
var d5 = [
    {display: "Z", value: "z" }];
 
 
 
 
var fbr, fbr2, ssipay, fbr_couple, allocation, parents, payment, state_supp_pay, allocation;

 
   
$(document).ready(function(){
    
   
        
    
 
 
           $("#ssn").mask("999-99-9999");
    


    

    
var month, year, state, type, payment, fedcode;

//controls month on the page and reacts based on month selection and year    
$("#month").change(function() {
    month = $(this).val();
    console.log(month);
    
    
                //condition if state of NY selected and month/year is before and after 10/2014
                if ((state == "NY") && (month >= 10) && (year >= 2014)) {

                                    $('#note').hide();
                                    $("#state_supp").html('<option value="z">Z</option>');


                } else if ((state == "NY") && (fedcode == "a") && (month <= 9) && (year == 2014) || (state == "NY") && (fedcode == "a") && (year <= 2013)) {

                                    $("#state_supp").html('<option value="b">B</option>');
                                    $('#note').show();


                } else if ((state == "NY") && (fedcode == "b") && (month <= 9) && (year == 2014) || (state == "NY") && (fedcode == "b") && (year <= 2013)) {

                                    $("#state_supp").html('<option value="f">F</option>');
                                    $('#note').show();


                } else if ((state == "NY") && (fedcode == "c") && (month <= 9) && (year == 2014) || (state == "NY") && (fedcode == "c") && (year <= 2013)) {

                                    $("#state_supp").html('<option value="b">B</option>');
                                    $('#note').show();

                }

    
});

//controls year on the page and reacts based on month selection and year  
$("#year").change(function() {
year = $(this).val();
console.log(year);
       
                                    
        
                        var tracker = 16;

                        for(var i = 0; i <= tracker; i++) {


                                //extracts fbr rates and allocation from SSI rates (JSON)
                                if (year == facts[i].year) {
                                        fbr = facts[i].fbr;
                                        fbr_couple = facts[i].couple;
                                        fbr2 = facts[i].fbr_b;
                                        allocation = facts[i].alloc;



                                }


                        }

    
//condition if state of NY selected and month/year is before and after 10/2014
                        if ((state == "NY") && (month >= 10) && (year == 2014) || (state == "NY") && (year >= 2015)) {

                            $('#note').hide();
                            $("#state_supp").html('<option value="z">Z</option>');
                            

                        } else if ((state == "NY") && (fedcode == "a") && (month <= 9) && (year == 2014) || (state == "NY") && (fedcode == "a") && (year <= 2013)) {

                        $("#state_supp").html('<option value="b">B</option>');
                        $('#note').show();
                            

                        } else if ((state == "NY") && (fedcode == "b") && (month <= 9) && (year == 2014) || (state == "NY") && (fedcode == "b") && (year <= 2013)) {

                        $("#state_supp").html('<option value="f">F</option>');
                        $('#note').show();
                            

                        } else if ((state == "NY") && (fedcode == "c") && (month <= 9) && (year == 2014) || (state == "NY") && (fedcode == "c") && (year <= 2013)) {

                        $("#state_supp").html('<option value="b">B</option>');
                        $('#note').show();

                            
                        }




});


//type of disability field   
$("#type").change(function() {
       
    type = $(this).val();
    
 
       
});
           
                  
$("#income1").change(function() {
         
       
                    //selection answers
                    var response = $(this).val();


                    if(response == "yes") {


                            $("#typeofincome").toggle();
                            $("#typeofinc").change(function() {
                                                
                                    var typeinc = $(this).val();

                                            $("#selection").show();

                                        if(typeinc == "earned") {

                                                    $("#selection").html('<label for="eninc">Earned income: </label><input type="text" id="eninc" name="eninc" />');
                                            
                                                    $("#eninc").numeric();



                                                    parseFloat($(this).val()).toFixed(2);


                                        } else if (typeinc == "unearned") {


                                                $("#selection").html('<label for="uninc">Unearned income: </label><input type="text" id="uninc" name="uninc"/>');

                                                parseFloat($(this).val()).toFixed(2);
                                            
                                                $("#uninc").numeric();

                                        } else if (typeinc == "both") {
                                        
                                                $("#selection").html('<p><label for="eninc">Earned income: </label><input type="text" id="eninc" />\
                                                <label for="uninc">Unearned income: </label><input type="text" id="uninc" /></p>');
                                            
                                                $("#eninc").numeric();
                                                $("#uninc").numeric();

                                        }


                            });
                        
                        
                    } else if(response == "no") {

                                      $("#selection").hide();
                                      $("#typeofincome").hide();
                                      $("#typeofincome").find("option:selected").removeAttr("selected");


                    }

});


//controls the state is selected    
$("#state").change(function() {

            state = $(this).val();
            console.log(state);
            $("#fedla").find("option:selected").removeAttr("selected");
            $("#state_supp").html('').hide();
            $('#note').hide();






            //shows type of disability function
            function blind_disabled_show() {
                
                        var type_disabled = $("#typedisabled").show();


            }

            //hides type of disability function
            function blind_disabled_hide() {

                        var type_disabled = $("#typedisabled").hide();

            }





                            if ((state == "NV") || (state == "CA") || (state == "IA")) {

                            blind_disabled_show();


                            } else if ((state == "NY") || (state == "LA") || (state == "DE") || (state == "DC") || (state == "HI")) {

                            blind_disabled_hide();


                            }


});

 
//controls federal living arrangement code and state LA code 
$("#fedla").change(function() {
 
 
                      fedcode = $(this).val();

                      if ((fedcode == "d") || (fedcode == "")) {

                            $("#parent").hide();
                            $("#inelig_child").hide();
                            $("#inelig_child_inc").hide();
                            $("#total_inc_inelig").hide();
                            $("#pts_inc").hide();
                            $("#pttype").hide();
                            $("#pttype2").hide();
                            $("#pt1").hide();
                            $("#pt2").hide();


                      } else  {

                            $("#parent").show();
                            $("#parent").find("option:selected").removeAttr("selected");
                            $("#inelig_child").find("option:selected").removeAttr("selected");
                            $("#pts_inc").show();
                            $("#pttype").show();
                            $("#pttype2").show();
                            $("#pt1").show();
                            $("#pt2").show();

                      }

    


                        //selection of state and corresponding federal and state LA
                        if (state == null) {

                                var parent1 = $(this).val(); //get option value from parent
                                $("#fedla").find("option:selected").removeAttr("selected");



                                switch(parent1) { 

                                  case 'a':
                                    list();
                                    break;
                                  case 'b':
                                    list();
                                    break;             
                                  case 'c':
                                    list();
                                    break; 
                                  case 'd':
                                    list();
                                    break; 
                                  default: //default child option is blank
                                    $("#state_supp").html('').hide(); 
                                    break;
                               }


                        } else if ((month <= 9) && (year == 2014) && (state == "NY") || (year <= 2013) && (state == "NY")) {
                            
                                var parent = $(this).val(); //get option value from parent
                                $("#fedla option[value='a']").show();



                                switch(parent) { 
                                      case 'a':
                                        list(a);
                                        break;
                                      case 'b':
                                        list(b);
                                        break;             
                                      case 'c':
                                        list(c);
                                        break; 
                                      case 'd':
                                        list(d);
                                        break; 
                                      default: //default child option is blank
                                        $("#state_supp").html('').hide(); 
                                        break;
                                   }


                                $('#note').show();
                            

                        } else if ((10 >= month <= 12) && (year == 2014) && (state == "NY") || (year >= 2015) && (state == "NY") || (state == "ME" ) || (state == "WY" )|| (state == "WA" ) || (state == "DE")) {

                                var parent1 = $(this).val(); //get option value from parent
                                $("#fedla option[value='a']").show();
                            

                                switch(parent1) { 

                                  case 'a':
                                    list(a1);
                                    break;
                                  case 'b':
                                    list(b1);
                                    break;             
                                  case 'c':
                                    list(c1);
                                    break; 
                                  case 'd':
                                    list(d1);
                                    break; 
                                  default: //default child option is blank
                                    $("#state_supp").html('').hide(); 
                                    break;
                               }



                        } else if ((type == "blind") && (state == "CA")) {

                                var parent1 = $(this).val(); //get option value from parent
                                $("#fedla option[value='a']").show();
                                

                                switch(parent1) {

                                  case 'a':
                                    list(a2);
                                    break;
                                  case 'b':
                                    list(b2);
                                    break;             
                                  case 'c':
                                    list(c2);
                                    break; 
                                  case 'd':
                                    list(d2);
                                    break; 
                                  default: //default child option is blank
                                    $("#state_supp").html('').hide(); 
                                    break;
                               }


                        } else if ((type == "disabled") && (state == "CA")) {

                                var parent1 = $(this).val(); //get option value from parent
                                $("#fedla option[value='a']").show();

                                switch(parent1) { 

                                  case 'a':
                                    list(a3);
                                    break;
                                  case 'b':
                                    list(b3);
                                    break;             
                                  case 'c':
                                    list(c3);
                                    break; 
                                  case 'd':
                                    list(d3);
                                    break; 
                                  default: //default child option is blank
                                    $("#state_supp").html('').hide(); 
                                    break;
                                        
                               }


                        } /*else if (state == "DE") {

                                var parent1 = $(this).val(); //get option value from parent
                                $("#fedla option[value='a']").hide();


                                switch(parent1){ 

                                  //case 'a':
                                    //list(a3);
                                    //break;
                                  case 'b':
                                    list(b5);
                                    break;             
                                  case 'c':
                                    list(c5);
                                    break; 
                                  case 'd':
                                    list(d5);
                                    break; 
                                  default: //default child option is blank
                                    $("#state_supp").html('').hide(); 
                                    break;
                               }



                        }*/ else if (state == "NJ") {

                                var parent1 = $(this).val(); //get option value from parent
                                $("#fedla option[value='a']").show();



                                switch(parent1){ 

                                  case 'a':
                                    list(a4);
                                    break;
                                  case 'b':
                                    list(b4);
                                    break;             
                                  case 'c':
                                    list(c4);
                                    break; 
                                  case 'd':
                                    list(d4);
                                    break; 
                                  default: //default child option is blank
                                    $("#state_supp").html('').hide(); 
                                    break;
                               }



                        }



});
    
   
$("#parents").change(function() {
            
    
    
                                parents = $(this).val();
                                $("#pttype").html('');
                                $("#pttype2").html('');
             

               
                                if (parents == 0) {
              
                                        $("#ptsinc").html('');
                                        $("#pttype").html('');
                                        $("#pttype2").html('');
                                        $("#inelig_child").hide();
                                    
                                    
                                } else if(parents == 1) {
               
                                        $("#ptsinc").html('<div id="pt1"><label for="incpt">What type of income does the parent have? </label>\
                                        <select id="incpt" name="parent_income">\
                                                    <option value= null>--Select--</option>\
                                                    <option value="earned">Earned</option>\
                                                    <option value="unearned">Unearned</option>\
                                                    <option value="both">Both</option>\
                                                    <option value="none">None</option>\
                                        </select>\
                                        </div>');
                     
                                        $("#inelig_child").show();
                                        $("#inelig_child").find("option:selected").removeAttr("selected");
                                        
                     
                                                    $("#incpt").change(function(){
                                        
                                        
                                                            var parent1inc = $(this).val();
                                       
                                                            if (parent1inc == "earned") {
                                                           
                                                                $("#pttype").html('<label for="earned1">Earned income: </label><input type="text" id="earned1" />');
                                                                
                                                                $("#earned1").numeric();
                                                           
                                                            } else if (parent1inc == "unearned") {
                                                                
                                                            
                                                                $("#pttype").html('<label for="unearned1">Unearned income: </label><input type="text" id="unearned1" />');
                                                                
                                                                $("#unearned1").numeric();
                                                           
                                                            } else if (parent1inc == "both") {
                                                            
                                                                $("#pttype").html('<label for="earned1">Earned income: </label><input type="text" id="earned1" />\
                                                                <label for="unearned1">Unearned income: </label><input type="text" id="unearned1" />');
                                                                
                                                                $("#earned1").numeric();
                                                                $("#unearned1").numeric();
                                       
                                                            } else if (parent1inc == "none") {
                                                                
                                                                $("#pttype").html('');
                                       
                                                            }
                                        
                                        
                                        });
                     
                                } else if(parents == 2) {
                                            $("#ptsinc").html('<div id="pt1"><label for="incpt">What type of income does parent 1 have? </label>\
                                                              <select id="incpt">\
                                                                    <option value= null>--Select--</option>\
                                                                    <option value="earned">Earned</option>\
                                                                    <option value="unearned">Unearned</option>\
                                                                    <option value="both">Both</option>\
                                                                    <option value="none">None</option>\
                                                              </select>\
                                                              </div>\
                                                              <div id="pt2"><label for="incpt2">What type of income does parent 2 have? </label>\
                                                              <select id="incpt2">\
                                                                    <option value= null>--Select--</option>\
                                                                    <option value="earned">Earned</option>\
                                                                    <option value="unearned">Unearned</option>\
                                                                    <option value="both">Both</option>\
                                                                    <option value="none">None</option>\
                                                              </select>\
                                                              </div>');

                                                       $("#inelig_child").show();
                                                        $("#inelig_child").find("option:selected").removeAttr("selected");
                                                       $("#pttype").html('');


                                            $("#incpt").change(function() {
                                                
                                                        var parent1inc = $(this).val();
                                       
                                                        if (parent1inc == "earned"){

                                                                $("#pttype").html('<label for="earned1">Earned income for Parent 1: </label><input type="text" id="earned1" />');
                                                            
                                                                $("#earned1").numeric();


                                                        } else if (parent1inc == "unearned") {

                                                                $("#pttype").html('<label for="unearned1">Unearned income for Parent 1: </label><input type="text" id="unearned1" />');
                                                            
                                                                $("#unearned1").numeric();

                                                        } else if (parent1inc == "both") {

                                                                $("#pttype").html('<label for="earned1">Earned income for Parent 1: </label><input type="text" id="earned1" />\
                                                              <label for="unearned1">Unearned income for Parent 1: </label><input type="text" id="unearned1" />');
                                                            
                                                                $("#earned1").numeric();
                                                                $("#unearned1").numeric();

                                                        } else if (parent1inc == "none") {

                                                                $("#pttype").html('');
                                                        }
                                      
                      
                                            $("#incpt2").change(function() {
           
                                                        var parent2inc = $(this).val();
      
                          
                          
                                                        if (parent2inc == "earned") {

                                                              $("#pttype2").html('<label for="earned2">Earned income for Parent 2: </label><input type="text" id="earned2" />');
                                                            
                                                              $("#earned2").numeric();

                                                        } else if (parent2inc == "unearned") {

                                                              $("#pttype2").html('<label for="unearned2">Unearned income for Parent 2: </label><input type="text" id="unearned2" />');
                                                            
                                                              $("#unearned2").numeric();

                                                        } else if (parent2inc == "both") {

                                                              $("#pttype2").html('<label for="earned2">Earned income for Parent 2: </label><input type="text" id="earned2" />\
                                                              <label for="unearned2">Unearned income for Parent 2: </label><input type="text" id="unearned2" />');
                                                            
                                                            $("#earned2").numeric();
                                                            $("#unearned2").numeric();

                                                        } else if (parent2inc == "none") {

                                                              $("#pttype2").html('');

                                                        }

                                  
                                            });
                                  
             
                                            });
                                  
                               
                                }
                

                     
                 

                            
});
    



//hidden -- number of ineligible children
$("#ineligible").change(function(){
        
        var ineligible = $(this).val();
                     
                     console.log(ineligible);
                     
                if (ineligible >= 1) {
            
                        $("#inelig_child_inc").show();
                    
                } else {
            
                        $("#inelig_child_inc").hide();
                        $("#total_inc_inelig").hide();
                        $("#inelig_inc_ques").find("option:selected").removeAttr("selected");
            
            
                }
        
        
        
    
    
                $("#inelig_inc_ques").change(function(){
        
                        var answer = $(this).val();
        

            
                        if (answer == "yes") {
            
                                $("#total_inc_inelig").show();
                                $("#total_inc_chd").numeric();
                            
                        
                        } else {
                        
                        $("#total_inc_inelig").hide();
                            
                        
                        
                        }
            
            
                });

 
});
    
    //error proning
    var ssn = document.getElementById("ssn").value;
    
    if (ssn == "") {
        
        $(".errors").hide();
    }
    
});
//function to populate child select box
   
 
function list(array_list){
    
    $("#state_supp").html(""); //reset child options
    $(array_list).each(function (i) { //populate child options
        $("#state_supp").append("<option value=\""+array_list[i].value+"\">"+array_list[i].display+"</option>").show();
        
    });
    
}
    
    
    
   
    
     
         
 
       

 
 
 
 
 
   
 
//function to test if page loaded successfully
window.addEventListener('load', function() {
    

                       
                  

                   
                                                
           
        //function to test calculate button, select option fields and input fields and their values
function calculation() {
        var calculate = document.getElementById("submit");
        
                                       
                                
        var both, both1, both2, both3, both4, both5;
                                        
        function both(earned, unearned) {
                                            
            var unearnedField = document.getElementById("uninc");
            var unearned = unearnedField.value;
                                            
                                            
            var earnedField = document.getElementById("eninc");
            var earned = earnedField.value;

            both = (unearned - 20) + (earned - 65)/2;
                                                
        } 
    
            function both1(earned1, unearned1) {
                                            
            var unearned1Field = document.getElementById("unearned1");
            var unearned1 = unearned1Field.value;
                                            
                                            
            var earned1Field = document.getElementById("earned1");
            var earned1 = earned1Field.value;

            both1 = ((unearned1 - 20) + (earned1 - 65)/2);
                                                
        }   
    
            function both2(earned2, unearned2) {
                                            
            var unearned2Field = document.getElementById("unearned2");
            var unearned2 = unearned2Field.value;
                                            
                                            
            var earned2Field = document.getElementById("earned2");
            var earned2 = earned2Field.value;

            both2 = ((unearned2 - 20) + (earned2 - 65)/2);
                                                
        }
    
            function both_earned() {
                                            
                                            
            var earned1Field = document.getElementById("earned1");
            var earned1 = earned1Field.value;
                
            var earned2Field = document.getElementById("earned2");
            var earned2 = earned2Field.value;
                
            both5 = (earned1 + earned2 - 65)/2;
                

    
                
            }
    
            function both_unearned() {
                
                
            var unearned2Field = document.getElementById("unearned2");
            var unearned2 = unearned2Field.value;
                                            
                                            
            var unearned1Field = document.getElementById("unearned1");
            var unearned1 = unearned1Field.value;
                
            both4 = unearned1 + unearned2 - 20;
                
            }
    

    
    
                                        

                                    
//test ssn field
var ssnfield = document.getElementById("ssn");
var ssn = ssnfield.value;


//fci field
var fciField = document.getElementById("fci");
var fci = fciField.value;



//month field
var monthField = document.getElementById("month");
var m = monthField.selectedIndex;
var month = monthField.options[m].value;

var stateField = document.getElementById("state");
var w = stateField.selectedIndex;
var statedr = stateField.options[w].value;



//year field
var yearField = document.getElementById("year");
var y = yearField.selectedIndex;
var year = yearField.options[y].value;



//SSI payment field
var ssipayField = document.getElementById("ssipay");
var ssipayment = ssipayField.value;


//Deeming field
var deemingField = document.getElementById('deeming');
var deeming = deemingField.value;


//states
var stateField = document.getElementById("state");
var s = stateField.selectedIndex;
var state_selected = stateField.options[s].value;


//fed la code
var fedlaField = document.getElementById("fedla");
var f = fedlaField.selectedIndex;
var fedcode1 = fedlaField.options[f].value;



var incomeQuesField = document.getElementById("income1");
var j = incomeQuesField.selectedIndex;
var incomeQues = incomeQuesField.options[j].value;
    

//selection of federal living arrangement and different fbr amounts   
    
if ((fedcode1 == "a") || (fedcode1 == "c")) {

             payment = fbr;

}

            else if (fedcode1 == "b") {

                    payment = fbr2;

            }
                    else if (fedcode1 == "d") {

                            payment = 30.00;

                    }

                                        
                                            
                                            
                            
//when child has income question is answered yes                                          
if (incomeQues == "yes") {

    var type_of_incomeQuesField = document.getElementById("typeofinc");
    var t = type_of_incomeQuesField.selectedIndex;
    var type_of_incomeQues = type_of_incomeQuesField.options[t].value;


                if (parents == 0) {

                    //no deeming involved
                    document.getElementById("deeming").value = (0.00).toFixed(2);



                            if (type_of_incomeQues == "unearned") {

                                    
                                    var unearnedField = document.getElementById("uninc");
                                    var unearned = unearnedField.value;

                                    document.getElementById("fci").value = (unearned - 20).toFixed(2);
                                
                                    if (document.getElementById("fci").value <= 0) {
                                        
                                        document.getElementById("fci").value = (0).toFixed(2);
                                        document.getElementById("ssipay").value = (payment).toFixed(2);
                                    
                                    } else {
                                        
                                        document.getElementById("ssipay").value = (payment - document.getElementById("fci").value);
                                        
                                        
                                    }


                                }
                    
                            else if (type_of_incomeQues == "earned") {

                                    var earnedField = document.getElementById("eninc");
                                    var earned = earnedField.value;
                                
                                

                                    document.getElementById("fci").value = ((earned - 85)/2).toFixed(2);
                                
                                    if (document.getElementById("fci").value <= 0) {
                                        
                                        document.getElementById("fci").value = (0).toFixed(2);
                                        document.getElementById("ssipay").value = (payment).toFixed(2);
                                    
                                    } else {
                                        
                                        document.getElementById("ssipay").value = (payment - document.getElementById("fci").value);
                                        
                                        
                                    }
                                
                                    

                            }
                            else if (type_of_incomeQues == "both") {

                                    both();

                                                if (both){


                                                        document.getElementById('fci').value = (both).toFixed(2);
                                                    
                                                    if (document.getElementById("fci").value <= 0) {
                                        
                                                        document.getElementById("fci").value = (0).toFixed(2);
                                                        document.getElementById("ssipay").value = (payment).toFixed(2);

                                                    } else {

                                                        document.getElementById("ssipay").value = (payment - document.getElementById("fci").value);


                                                    }


                                                }

                            }
                }
    
        //one parent living in the household
            else if (parents == 1) {

                var parent_inc_Field = document.getElementById("incpt");
                var p = parent_inc_Field.selectedIndex;
                var parent_income = parent_inc_Field.options[p].value;
                
                var ineligible_child_field = document.getElementById("ineligible");
                var c = ineligible_child_field.selectedIndex;
                var ineligibles = ineligible_child_field.options[c].value;




                            //if parent has unearned income
                            if ((parent_income == "unearned") && (type_of_incomeQues == "unearned")) {

                                var unearnedpt1Field = document.getElementById("unearned1");
                                var unearnedpt1 = unearnedpt1Field.value;
                                
                                var unearnedField = document.getElementById("uninc");
                                var unearned = unearnedField.value;
                                
                                
                                document.getElementById("deeming").value = (unearnedpt1 - 20 - fbr - (ineligibles * allocation)).toFixed(2);
                                
                                
                                if (document.getElementById("deeming").value <= 0) {
                                    
                                    document.getElementById("deeming").value = (0).toFixed(2);
                                    
                                    document.getElementById("fci").value = (unearned - 20).toFixed(2);
                                    
                                    
                                    
                                } else {
                                    
                                    
                                    document.getElementById("deeming").value = (unearnedpt1 - 20 - fbr - (ineligibles * allocation)).toFixed(2);
                                    
                                    document.getElementById("fci").value = ((unearned - 0) + (document.getElementById("deeming").value - 20)).toFixed(2);
                                    
                                }



                                document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2);
                                
                                


                            }
                
                            else if ((parent_income == "unearned") && (type_of_incomeQues == "earned")) {

                                var unearnedpt1Field = document.getElementById("unearned1");
                                var unearnedpt1 = unearnedpt1Field.value;
                                
                                var earnedField = document.getElementById("eninc");
                                var earned = earnedField.value;

                                
                                document.getElementById("deeming").value = (unearnedpt1 - 20 - fbr - (ineligibles * allocation)).toFixed(2);
                                
                                if (document.getElementById("deeming").value <= 0 ) {
                                    
                                    document.getElementById("deeming").value = (0).toFixed(2);
                                    document.getElementById("fci").value = (((earned - 65)/2)).toFixed(2);
                                    
                                    
                                } else {
                                    
                                        document.getElementById("fci").value = (((earned - 65)/2) + (document.getElementById("deeming").value - 20)).toFixed(2);
                                    
                                }
                                
                                document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2);
                                
                                


                            }
                            else if ((parent_income == "earned") && (type_of_incomeQues == "unearned"))   {

                                var earnedpt1Field = document.getElementById("earned1");
                                var earnedpt1 = earnedpt1Field.value;
                                
                                var unearnedField = document.getElementById("uninc");
                                var unearned = unearnedField.value;
                                

                                document.getElementById("deeming").value = (((earnedpt1 - 85)/2) - fbr - (ineligibles * allocation)).toFixed(2);
                                
                                if (document.getElementById("deeming").value <= 0) {
                                    
                                    document.getElementById("deeming").value = (0).toFixed(2);
                                    document.getElementById("fci").value = ((unearned - 20)).toFixed(2);
                                
                                } else {
                                    
                                    document.getElementById("fci").value = ((unearned - 0) + (document.getElementById("deeming").value - 20)).toFixed(2);
                                    
                                    
                                    
                                }

                                document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2);
                                
                            }
                
                            else if ((parent_income == "earned") && (type_of_incomeQues == "earned"))   {

                                var earnedpt1Field = document.getElementById("earned1");
                                var earnedpt1 = earnedpt1Field.value;
                                
                                var earnedField = document.getElementById("eninc");
                                var earned = earnedField.value;
                                

                                document.getElementById("deeming").value = (((earnedpt1 - 85)/2) - fbr - (ineligibles * allocation)).toFixed(2);
                                
                                
                                if (document.getElementById("deeming").value <= 0) {
                                    
                                    document.getElementById("deeming").value = (0).toFixed(2);
                                    document.getElementById("fci").value = (((earned - 65)/2)).toFixed(2);
                                    
                                } else {
                                    
                                    
                                        document.getElementById("fci").value = (((earned - 65)/2) + (document.getElementById("deeming").value - 20)).toFixed(2);
                                    
                                    
                                }

                                document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2);
                                
                            }
                
                            else if ((parent_income == "earned") && (type_of_incomeQues == "both"))   {

                                var earnedpt1Field = document.getElementById("earned1");
                                var earnedpt1 = earnedpt1Field.value;
                                
                                both();


                                document.getElementById("deeming").value = (((earnedpt1 - 85)/2) - fbr - (ineligibles * allocation)).toFixed(2);
                                    
                                if (document.getElementById("deeming").value <= 0) {
                                    
                                    document.getElementById("deeming").value = 0;
                                    document.getElementById("fci").value = (both).toFixed(2);
                                    
                                } else {
                                    
                                    document.getElementById("fci").value = ((both) + (document.getElementById("deeming").value - 20)).toFixed(2);
                                    
                                    
                                    
                                }
                                    
                                    
                                    
                                document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2);
                                    
                                
                                
                                
                                
                            }
                
                            else if ((parent_income == "both") && (type_of_incomeQues == "unearned")) {
                                
                                both1();
                                
                                var unearnedField = document.getElementById("uninc");
                                var unearned = unearnedField.value;
                                
                                    if ((both1) && (unearned)){
                                        
                                                        document.getElementById("deeming").value = (both1 - fbr - (ineligibles * allocation)).toFixed(2);
                                        
                                        if (document.getElementById("deeming").value <= 0) {
                                            
                                            document.getElementById("deeming").value = (0).toFixed(2);
                                            document.getElementById('fci').value = (unearned - 20).toFixed(2);
                                            
                                        } else {
                                            
                                            
                                        document.getElementById('fci').value = ((unearned - 0) + (document.getElementById("deeming").value - 20)).toFixed(2);
                                            
                                            
                                            
                                        }
                                        
                                                        document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2); 
                                        
                                                    
                                        
                                    }
                            }
                
                            else if ((parent_income == "both") && (type_of_incomeQues == "earned")) {
                                
                                both1();
                                
                                var earnedField = document.getElementById("eninc");
                                var earned = earnedField.value;
                                
                                
                                
                                    if ((both1) && (earned)){
                                        
                                                document.getElementById("deeming").value = (both1 - fbr - (ineligibles * allocation)).toFixed(2);
                                        
                                        
                                        if (document.getElementById("deeming").value <= 0) {
                                            
                                            document.getElementById("deeming").value = (0).toFixed(2);
                                            document.getElementById('fci').value = (((earned - 85)/2)).toFixed(2);
                                            
                                            
                                        } else {
                                            
                                            
                                            document.getElementById('fci').value = (((earned - 65)/2) + (document.getElementById("deeming").value - 20)).toFixed(2);
                                            
                                            
                                            
                                            
                                        }

                                            document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2); 
                                        
                                        
                                        
                                                    
                                        
                                    }
                            }
                
                            else if ((parent_income == "none") && (type_of_incomeQues == "none")) {
                                
                                document.getElementById("deeming").value = (0).toFixed(2);
                                document.getElementById("ssipay").value = (payment).toFixed(2);
                                document.getElementById("fci").value = (0).toFixed(2);
                            }
                
                            else if ((parent_income == "none") && (type_of_incomeQues == "unearned")) {
                                
                                    var unearnedField = document.getElementById("uninc");
                                    var unearned = unearnedField.value;

                                    document.getElementById("fci").value = (unearned - 20).toFixed(2);
                                    document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2);
                                    document.getElementById("deeming").value = (0).toFixed(2);

                            }
                            else if ((parent_income == "none") && (type_of_incomeQues == "earned")) {
                                
                                    var earnedField = document.getElementById("eninc");
                                    var earned = earnedField.value;

                                    document.getElementById("fci").value = ((earned - 85)/2).toFixed(2);
                                    document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2);
                                    document.getElementById("deeming").value = (0).toFixed(2);

                            }
                }
    
                            else if (parents == 2) {
                                
                                    var parent_inc_Field = document.getElementById("incpt");
                                    var p = parent_inc_Field.selectedIndex;
                                    var parent_income = parent_inc_Field.options[p].value;
                                
                                
                                    var parent_inc2_Field = document.getElementById("incpt2");
                                    var a = parent_inc2_Field.selectedIndex;
                                    var parent_income2 = parent_inc2_Field.options[a].value;
                                
                                    var ineligible_child_field = document.getElementById("ineligible");
                                    var c = ineligible_child_field.selectedIndex;
                                    var ineligibles = ineligible_child_field.options[c].value;

                                
                                
                                            if ((parent_income == "none") && (parent_income2 == "none") && (type_of_incomeQues == "unearned")) {
                                                
                                                
                                                        var unearnedField = document.getElementById("uninc");
                                                        var unearned = unearnedField.value;
                                                
                                                        document.getElementById("deeming").value = (0).toFixed(2);
                                                        document.getElementById("fci").value = (unearned - 20).toFixed(2);
                                                        document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2);
                                                
                                                
                                            }
                                            else if ((parent_income == "none") && (parent_income2 == "none") && (type_of_incomeQues == "earned")) {
                                                
                                                
                                                        var earnedField = document.getElementById("eninc");
                                                        var earned = earnedField.value;
                                                
                                                        document.getElementById("deeming").value = (0).toFixed(2);
                                                        document.getElementById("fci").value = ((earned - 85)/2).toFixed(2);
                                                        document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2);
                                                
                                                
                                            }

                                            else if ((parent_income == "none") && (parent_income2 == "none") && (type_of_incomeQues == "both")) {



                                                both();
                                                


                                                    
                                                    document.getElementById("deeming").value = (0).toFixed(2);
                                                    document.getElementById("fci").value = (both).toFixed(2);
                                                document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2);

                                            }
                                
                                
                                
                                            else if ((parent_income == "earned") && (parent_income2 == "none") && (type_of_incomeQues == "earned")) {

                                                var earnedpt1Field = document.getElementById("earned1");
                                                var earnedpt1 = earnedpt1Field.value;
                                                
                                                var earnedField = document.getElementById("eninc");
                                                var earned = earnedField.value;
                                                
                                                

                                                document.getElementById("deeming").value = (((earnedpt1 - 85)/2) - fbr_couple - (ineligibles * allocation)).toFixed(2);
                                                
                                                if (document.getElementById("deeming").value <= 0) {
                                                    
                                                    document.getElementById("deeming").value = (0).toFixed(2);
                                                    ocument.getElementById("fci").value = ((earned - 85)/2).toFixed(2);
                                                    
                                                    
                                                } else {
                                                    
                                                    document.getElementById("fci").value = (((earned - 65)/2) + (document.getElementById("deeming").value - 20)).toFixed(2);
                                                }
                                                
                                                document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2);
                                                

                                            }
                                
                                            else if ((parent_income == "earned") && (parent_income2 == "none") && (type_of_incomeQues == "unearned")) {

                                                var earnedpt1Field = document.getElementById("earned1");
                                                var earnedpt1 = earnedpt1Field.value;
                                                
                                                var unearnedField = document.getElementById("uninc");
                                                var unearned = unearnedField.value;
                                                
                                                

                                                document.getElementById("deeming").value = (((earnedpt1 - 85)/2) - fbr_couple - (ineligibles * allocation)).toFixed(2);
                                                
                                                if (document.getElementById("deeming").value <= 0) {
                                                    
                                                    document.getElementById("deeming").value = (0).toFixed(2);
                                                    ocument.getElementById("fci").value = (unearned - 20).toFixed(2);
                                                    
                                                    
                                                } else {
                                                    
                                                    document.getElementById("fci").value = ((unearned - 20) + (document.getElementById("deeming").value - 20)).toFixed(2);
                                                }
                                                
                                                document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2);
                                                

                                            }
                                
                                            else if ((parent_income == "earned") && (parent_income2 == "none") && (type_of_incomeQues == "both")) {

                                                var earnedpt1Field = document.getElementById("earned1");
                                                var earnedpt1 = earnedpt1Field.value;
                                                

                                                both();
                                                

                                                document.getElementById("deeming").value = (((earnedpt1 - 65)/2) - fbr_couple - (ineligibles * allocation)).toFixed(2);
                                                
                                                if (document.getElementById("deeming").value <= 0) {
                                                    
                                                    document.getElementById("deeming").value = (0).toFixed(2);
                                                    document.getElementById("fci").value = (both).toFixed(2);
                                                    
                                                } else {
                                                    
                                                    document.getElementById("fci").value = ((both) + (document.getElementById("deeming").value - 0)).toFixed(2);
                                                }
                                                
                                                
                                                document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2);

                                            }
                                
                                            else if ((parent_income == "none") && (parent_income2 == "earned") && (type_of_incomeQues == "earned")) {

                                                var earnedpt2Field = document.getElementById("earned2");
                                                var earnedpt2 = earnedpt2Field.value;
                                                
                                                var earnedField = document.getElementById("eninc");
                                                var earned = earnedField.value;

                                                document.getElementById("deeming").value = (((earnedpt2 - 85)/2) - fbr_couple - (ineligibles * allocation)).toFixed(2);
                                                
                                                if (document.getElementById("deeming").value <= 0) {
                                                    
                                                    document.getElementById("deeming").value = (0).toFixed(2);
                                                    document.getElementById("fci").value = (((earned - 65)/2)).toFixed(2);  
                                                    
                                                } else {
                                                    
                                                    document.getElementById("fci").value = (((earned - 65)/2) + (document.getElementById("deeming").value - 20)).toFixed(2);
                                                    
                                                }
                                                
                                                          document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2);
                                                
                                            }
                                
                                

                                            else if ((parent_income == "unearned") && (parent_income2 == "none") && (type_of_incomeQues == "unearned")) {

                                var unearnedpt1Field = document.getElementById("unearned1");
                                var unearnedpt1 = unearnedpt1Field.value;
                                
                                var unearnedField = document.getElementById("uninc");
                                var unearned = unearnedField.value;
                                
                                
                                document.getElementById("deeming").value = (unearnedpt1 - 20 - fbr - (ineligibles * allocation)).toFixed(2);
                                
                                
                                if (document.getElementById("deeming").value <= 0) {
                                    
                                    document.getElementById("deeming").value = (0).toFixed(2);
                                    
                                    document.getElementById("fci").value = (unearned - 20).toFixed(2);
                                    
                                    
                                    
                                } else {
                                    
                                    
                                    document.getElementById("deeming").value = (unearnedpt1 - 20 - fbr - (ineligibles * allocation)).toFixed(2);
                                    
                                    document.getElementById("fci").value = ((unearned - 0) + (document.getElementById("deeming").value - 20)).toFixed(2);
                                    
                                }



                                document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2);
                                
                                


                            }
                                
                                    else if ((parent_income == "unearned") && (parent_income2 == "none") && (type_of_incomeQues == "both")) {
                                        
                                        
                                var unearnedpt1Field = document.getElementById("unearned1");
                                var unearnedpt1 = unearnedpt1Field.value;
                                
                                both();


                                document.getElementById("deeming").value = ((unearnedpt1 - 20) - fbr - (ineligibles * allocation)).toFixed(2);
                                    
                                if (document.getElementById("deeming").value <= 0) {
                                    
                                    document.getElementById("deeming").value = 0;
                                    document.getElementById("fci").value = (both).toFixed(2);
                                    
                                } else {
                                    
                                    document.getElementById("fci").value = ((both) + (document.getElementById("deeming").value - 20)).toFixed(2);
                                    
                                    
                                    
                                }
                                    
                                    
                                    
                                document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2);
                                    
                                
                                    }


                                            
                                
                                            else if ((parent_income == "none") && (parent_income2 == "unearned")) {

                                                var unearnedpt2Field = document.getElementById("unearned2");
                                                var unearnedpt2 = unearnedpt2Field.value;


                                                document.getElementById("deeming").value = (unearnedpt2 - 20 - fbr_couple - (ineligibles * allocation)).toFixed(2);
                                                document.getElementById("fci").value = (document.getElementById("deeming").value - 20).toFixed(2);




                                            }
                                
                                            else if ((parent_income == "unearned") && (parent_income2 == "unearned") && (type_of_incomeQues == "unearned")) {
                                                
                                                    var unearnedpt1 = document.getElementById("unearned1").value;
                                                
                                                    var unearnedpt2 = document.getElementById("unearned2").value;
                                                
                                                        var unearnedField = document.getElementById("uninc");
                                                        var unearned = unearnedField.value;
                                                
                                                document.getElementById("deeming").value = ((unearnedpt2 - 0 ) + (unearnedpt1 - 20) - fbr_couple - (ineligibles * allocation)).toFixed(2);
                                                
                                                if (document.getElementById("deeming").value <= 0) {
                                                    
                                                    document.getElementById("deeming").value = (0).toFixed(2);
                                                    document.getElementById("fci").value = (unearned - 20).toFixed(2);
                                                    
                                                    
                                                    
                                                } else {
                                                    
                                                    
                                                    document.getElementById("fci").value = ((unearned - 0) + (document.getElementById("deeming").value - 20)).toFixed(2);
                                                    
                                                    
                                                    
                                                }
                                                

                                                document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2);

                                                
                                                
                                            }
                                
                                            else if ((parent_income == "unearned") && (parent_income2 == "earned") && (type_of_incomeQues == "unearned")) {
                                                
                                                    var unearnedpt1 = document.getElementById("unearned1").value;
                                                
                                                    var earnedpt2 = document.getElementById("earned2").value;
                                                
                                                
                                                    var unearnedField = document.getElementById("uninc");
                                                    var unearned = unearnedField.value;
                                                
                                            document.getElementById("deeming").value = (((earnedpt2 - 65)/2) + (unearnedpt1 - 20) - fbr_couple - (ineligibles * allocation)).toFixed(2);
                                                
                                                
                                            if (document.getElementById("deeming").value <= 0) {
                                                    
                                                    document.getElementById("deeming").value = (0).toFixed(2);
                                                    document.getElementById("fci").value = (unearned - 20).toFixed(2);
                                                    
                                                    
                                                    
                                                } else {
                                                    
                                                    
                                                    document.getElementById("fci").value = ((unearned - 0) + (document.getElementById("deeming").value - 20)).toFixed(2);
                                                    
                                                    document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2);
                                                    
                                                    
                                                    
                                                }
                                                



                                                
                                                
                                            }
                                
                                            else if ((parent_income == "unearned") && (parent_income2 == "both") && (type_of_incomeQues == "unearned")) {
                                                
                                                    var unearnedpt1 = document.getElementById("unearned1").value;
                                                
                                                    both2();
                                                
                                                
                                                    var unearnedField = document.getElementById("uninc");
                                                    var unearned = unearnedField.value;
                                                
                                            document.getElementById("deeming").value = ((both2 - 0) + (unearnedpt1 - 20) - fbr_couple - (ineligibles * allocation)).toFixed(2);
                                                
                                                
                                            if (document.getElementById("deeming").value <= 0) {
                                                    
                                                    document.getElementById("deeming").value = (0).toFixed(2);
                                                    document.getElementById("fci").value = (unearned - 20).toFixed(2);
                                                    
                                                    
                                                    
                                                } else {
                                                    
                                                    
                                                    document.getElementById("fci").value = ((unearned - 0) + (document.getElementById("deeming").value - 20)).toFixed(2);
                                                    
                                                    document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2);
                                                    
                                                    
                                                    
                                                }
                                                



                                                
                                                
                                            }


                                                
                                                
                                            
                                
                                            else if ((parent_income == "earned") && (parent_income2 == "unearned") && (type_of_incomeQues == "unearned")) {
                                                
                                                    var earnedpt1 = document.getElementById("earned1").value;
                                                
                                                    var unearnedpt2 = document.getElementById("unearned2").value;
                                                
                                                    var unearnedField = document.getElementById("uninc");
                                                    var unearned = unearnedField.value;
                                                
                                       
                                                document.getElementById("deeming").value = (((earnedpt1 - 65)/2 ) + (unearnedpt2 - 20) - fbr_couple - (ineligibles * allocation)).toFixed(2);

                                                
                                        if (document.getElementById("deeming").value <= 0) {
                                    
                                    document.getElementById("deeming").value = (0).toFixed(2);
                                    document.getElementById("fci").value = (0).toFixed(2);
                                    
                                } else {
                                                document.getElementById("fci").value = (document.getElementById("deeming").value - 20).toFixed(2);
                                                
                                }
                                                
                                                
                                            }
                                
                                            else if ((parent_income == "earned") && (parent_income2 == "earned")) {
                                                
                                                    var earnedpt1 = document.getElementById("earned1").value;
                                                
                                                    var earnedpt2 = document.getElementById("earned2").value;
                                                
                                       
                                                document.getElementById("deeming").value = ((earnedpt1 + earnedpt1 - 85)/2) - fbr_couple - (ineligibles * allocation).toFixed(2);

                                                
                                        if (document.getElementById("deeming").value <= 0) {
                                    
                                    document.getElementById("deeming").value = (0).toFixed(2);
                                    document.getElementById("fci").value = (0).toFixed(2);
                                    
                                } else {
                                                document.getElementById("fci").value = (document.getElementById("deeming").value - 20).toFixed(2);
                                                
                                }
                                                
                                                
                                            }
                                
                                            else if ((parent_income == "both") && (parent_income2 == "none")) {
                                                
                                                    both1();
                                                
                                                
                                                    if (both1) {
                                                
                                       
                                                document.getElementById("deeming").value = both1 - fbr_couple - (ineligibles * allocation).toFixed(2);

                                                        
                                        if (document.getElementById("deeming").value <= 0) {
                                    
                                    document.getElementById("deeming").value = (0).toFixed(2);
                                    document.getElementById("fci").value = (0).toFixed(2);
                                    
                                } else {
                                                document.getElementById("fci").value = (document.getElementById("deeming").value - 20).toFixed(2);
                                                
                                }
                                                
                                                    }
                                            }
                                
                                            else if ((parent_income == "none") && (parent_income2 == "both")) {
                                                
                                                    both2();
                                                
                                                
                                                    if (both2) {
                                                
                                       
                                                document.getElementById("deeming").value = both2 - fbr_couple - (ineligibles * allocation).toFixed(2);

                                                    
                                        if (document.getElementById("deeming").value <= 0) {
                                    
                                    document.getElementById("deeming").value = (0).toFixed(2);
                                    document.getElementById("fci").value = (0).toFixed(2);
                                    
                                } else {
                                                document.getElementById("fci").value = (document.getElementById("deeming").value - 20).toFixed(2);
                                                
                                }
                                                
                                                    }
                                            }
                                
                                            else if ((parent_income == "both") && (parent_income2 == "both")) {
                                                
                                                    //both1();
                                                    //both2();
                                                    both3(earnedpt1, unearnedpt1, earnedpt2, unearnedpt2);
                                                   
                                                
                                                    if (both3) {
                                                
                                       
                                                document.getElementById("deeming").value = (both3 - fbr_couple - (ineligibles * allocation)).toFixed(2);

                                                        
                                        if (document.getElementById("deeming").value <= 0) {
                                    
                                    document.getElementById("deeming").value = (0).toFixed(2);
                                    document.getElementById("fci").value = (0).toFixed(2);
                                    
                                } else {
                                                document.getElementById("fci").value = (document.getElementById("deeming").value - 20).toFixed(2);
                                                
                                }
                                                        
                                                        
                                                
                                                    
                                            }
                                

                                
                                            
                            }
    



}
}
    

 //when child has income question is answered no                                      
    else if (incomeQues == "no") {
                                            
        //no income
                                            
            if (parents == 0) {

                //no parents in the household or doing comp based on child's income
                    document.getElementById("ssipay").value = (payment).toFixed(2);
                    document.getElementById("fci").value = (0).toFixed(2);
                    document.getElementById("deeming").value = (0).toFixed(2);


            }

    
        //one parent living in the household
            else if (parents == 1) {

                var parent_inc_Field = document.getElementById("incpt");
                var p = parent_inc_Field.selectedIndex;
                var parent_income = parent_inc_Field.options[p].value;
                
                var ineligible_child_field = document.getElementById("ineligible");
                var c = ineligible_child_field.selectedIndex;
                var ineligibles = ineligible_child_field.options[c].value;




                            //if parent has unearned income
                            if (parent_income == "unearned") {

                                var unearnedpt1Field = document.getElementById("unearned1");
                                var unearnedpt1 = unearnedpt1Field.value;
                                
                        document.getElementById("deeming").value = (unearnedpt1 - 20 - fbr - (ineligibles * allocation)).toFixed(2);
                            
                                if (document.getElementById("deeming").value <= 0) {
                                                    
                                document.getElementById("deeming").value = (0).toFixed(2);
                                                    document.getElementById("fci").value = (0).toFixed(2);
                                                    
                                                    
                                                    
                                    } else {



                                document.getElementById("fci").value = (document.getElementById("deeming").value - 20).toFixed(2);
                                
                                                }


                            }
                            else if (parent_income == "earned") {

                                var earnedpt1Field = document.getElementById("earned1");
                                var earnedpt1 = earnedpt1Field.value;

                                document.getElementById("deeming").value = (((earnedpt1 - 85)/2) - fbr - (ineligibles * allocation)).toFixed(2);
                                
                                
                                if (document.getElementById("deeming").value <= 0) {
                                    
                                    document.getElementById("deeming").value = (0).toFixed(2);
                                    document.getElementById("fci").value = (0).toFixed(2);
                                    
                                } else {
                                
                                
                                document.getElementById("fci").value = (document.getElementById("deeming").value - 20).toFixed(2);
                                    
                                }
                                
                            }
                
                            else if (parent_income == "both") {
                                
                                both1();
                                
                                    if (both1){
                                                        document.getElementById("deeming").value = (both1 - fbr - (ineligibles * allocation)).toFixed(2);
                                        
                                    if (document.getElementById("deeming").value <= 0) {
                                    
                                    document.getElementById("deeming").value = (0).toFixed(2);
                                    document.getElementById("fci").value = (0).toFixed(2);
                                    
                                } else {
                                                        document.getElementById('fci').value = (document.getElementById("deeming").value - 20).toFixed(2);
                                                        document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2); 
                                }
                                    }
                            }
                
                            else if (parent_income == "none") {
                                
                                document.getElementById("deeming").value = (0).toFixed(2);
                                document.getElementById("ssipay").value = (payment).toFixed(2);
                                document.getElementById("fci").value = (0).toFixed(2);
                            }
                }
        
        
        
                //2 parents living in the household
                            else if (parents == 2) {
                                
                                    var parent_inc_Field = document.getElementById("incpt");
                                    var p = parent_inc_Field.selectedIndex;
                                    var parent_income = parent_inc_Field.options[p].value;
                                
                                
                                    var parent_inc2_Field = document.getElementById("incpt2");
                                    var a = parent_inc2_Field.selectedIndex;
                                    var parent_income2 = parent_inc2_Field.options[a].value;
                                
                                    var ineligible_child_field = document.getElementById("ineligible");
                                    var c = ineligible_child_field.selectedIndex;
                                    var ineligibles = ineligible_child_field.options[c].value;

                                
                                
                                            if ((parent_income == "none") && (parent_income2 == "none")) {
                                                
                                                        document.getElementById("deeming").value = (0).toFixed(2);
                                                        document.getElementById("ssipay").value = (payment).toFixed(2);
                                                        document.getElementById("fci").value = (0).toFixed(2);
                                                
                                                
                                            }
                                
                                
                                
                                            else if ((parent_income == "earned") && (parent_income2 == "none")) {

                                                var earnedpt1Field = document.getElementById("earned1");
                                                var earnedpt1 = earnedpt1Field.value;

                                                document.getElementById("deeming").value = (((earnedpt1 - 85)/2) - fbr_couple - (ineligibles * allocation)).toFixed(2);
                                                
                                        if (document.getElementById("deeming").value <= 0) {
                                    
                                    document.getElementById("deeming").value = (0).toFixed(2);
                                    document.getElementById("fci").value = (0).toFixed(2);
                                    
                                } else {
                                                document.getElementById("fci").value = (document.getElementById("deeming").value - 20).toFixed(2);
                                  }

                                            }
                                
                                            else if ((parent_income == "none") && (parent_income2 == "earned")) {

                                                var earnedpt2Field = document.getElementById("earned2");
                                                var earnedpt2 = earnedpt2Field.value;

                                                document.getElementById("deeming").value = (((earnedpt2 - 85)/2) - fbr_couple - (ineligibles * allocation)).toFixed(2);
                                                
                                                
                                        if (document.getElementById("deeming").value <= 0) {
                                    
                                    document.getElementById("deeming").value = (0).toFixed(2);
                                    document.getElementById("fci").value = (0).toFixed(2);
                                    
                                } else {
                                                document.getElementById("fci").value = (document.getElementById("deeming").value - 20).toFixed(2);
                                   }

                                            }
                                
                                

                                            else if ((parent_income == "unearned") && (parent_income2 == "none")) {

                                                var unearnedpt1Field = document.getElementById("unearned1");
                                                var unearnedpt1 = unearnedpt1Field.value;


                                                document.getElementById("deeming").value = (unearnedpt1 - 20 - fbr_couple - (ineligibles * allocation)).toFixed(2);
                                                
                                                
                                        if (document.getElementById("deeming").value <= 0) {
                                    
                                    document.getElementById("deeming").value = (0).toFixed(2);
                                    document.getElementById("fci").value = (0).toFixed(2);
                                    
                                } else {
                                                document.getElementById("fci").value = (document.getElementById("deeming").value - 20).toFixed(2);


                                   }

                                            }
                                
                                            else if ((parent_income == "none") && (parent_income2 == "unearned")) {

                                                var unearnedpt2Field = document.getElementById("unearned2");
                                                var unearnedpt2 = unearnedpt2Field.value;


                                                document.getElementById("deeming").value = (unearnedpt2 - 20 - fbr_couple - (ineligibles * allocation)).toFixed(2);
                                                
                                                    
                                        if (document.getElementById("deeming").value <= 0) {
                                    
                                    document.getElementById("deeming").value = (0).toFixed(2);
                                    document.getElementById("fci").value = (0).toFixed(2);
                                    
                                } else {
                                                document.getElementById("fci").value = (document.getElementById("deeming").value - 20).toFixed(2);


                                   }

                                            }
                                
                                            else if ((parent_income == "unearned") && (parent_income2 == "unearned")) {
                                                
                                                    var unearnedpt1 = document.getElementById("unearned1").value;
                                                
                                                    var unearnedpt2 = document.getElementById("unearned2").value;
                                                
                                       
                                                document.getElementById("deeming").value = ((unearnedpt2 - 0 ) + (unearnedpt1 - 20) - fbr_couple - (ineligibles * allocation)).toFixed(2);
                                                
                                                
                                                
                                        if (document.getElementById("deeming").value <= 0) {
                                    
                                    document.getElementById("deeming").value = (0).toFixed(2);
                                    document.getElementById("fci").value = (0).toFixed(2);
                                    
                                } else {
                                                document.getElementById("fci").value = (document.getElementById("deeming").value - 20).toFixed(2);
                                                
                                }
                                                
                                                
                                            }
                                
                                            else if ((parent_income == "unearned") && (parent_income2 == "earned")) {
                                                
                                                    var unearnedpt1 = document.getElementById("unearned1").value;
                                                
                                                    var earnedpt2 = document.getElementById("earned2").value;
                                                
                                       
                                                document.getElementById("deeming").value = (((earnedpt2 - 65)/2 ) + (unearnedpt1 - 20) - fbr_couple - (ineligibles * allocation)).toFixed(2);
                                                
                                                
                                    if (document.getElementById("deeming").value <= 0) {
                                    
                                    document.getElementById("deeming").value = (0).toFixed(2);
                                    document.getElementById("fci").value = (0).toFixed(2);
                                    
                                } else {
                                                document.getElementById("fci").value = (document.getElementById("deeming").value - 20).toFixed(2);
                                                
                                }

                                                
                                                
                                            }
                                
                                            else if ((parent_income == "earned") && (parent_income2 == "unearned")) {
                                                
                                                    var earnedpt1 = document.getElementById("earned1").value;
                                                
                                                    var unearnedpt2 = document.getElementById("unearned2").value;
                                                
                                       
                                                document.getElementById("deeming").value = (((earnedpt1 - 65)/2 ) + (unearnedpt2 - 20) - fbr_couple - (ineligibles * allocation)).toFixed(2);

                                                
                                        if (document.getElementById("deeming").value <= 0) {
                                    
                                    document.getElementById("deeming").value = (0).toFixed(2);
                                    document.getElementById("fci").value = (0).toFixed(2);
                                    
                                } else {
                                                document.getElementById("fci").value = (document.getElementById("deeming").value - 20).toFixed(2);
                                                
                                }
                                                
                                                
                                            }
                                
                                            else if ((parent_income == "earned") && (parent_income2 == "earned")) {
                                                
                                                var earnedpt1Field = document.getElementById("earned1");
                                                var earnedpt1 = earnedpt1Field.value;
                                                
                                                var earnedpt2Field = document.getElementById("earned2");
                                                var earnedpt2 = earnedpt2Field.value;
                                                
                                       
                                                document.getElementById("deeming").value = ((parseFloat(earnedpt2) + parseFloat(earnedpt1) - 85)/2 - fbr_couple - (ineligibles * allocation)).toFixed(2);
                                                
                                                
                                    if (document.getElementById("deeming").value <= 0) {
                                    
                                    document.getElementById("deeming").value = (0).toFixed(2);
                                    document.getElementById("fci").value = (0).toFixed(2);
                                    
                                } else {
                                                document.getElementById("fci").value = (document.getElementById("deeming").value - 20).toFixed(2);
                                                
                                }
                                                
                                            }
                                
                                            else if ((parent_income == "both") && (parent_income2 == "none")) {
                                                
                                                    both1();
                                                
                                                
                                                    if (both1) {
                                                
                                       
                                                document.getElementById("deeming").value = (both1 - fbr_couple - (ineligibles * allocation)).toFixed(2);
                                           
                                                        
                                        if (document.getElementById("deeming").value <= 0) {
                                    
                                    document.getElementById("deeming").value = (0).toFixed(2);
                                    document.getElementById("fci").value = (0).toFixed(2);
                                    
                                } else {
                                                document.getElementById("fci").value = (document.getElementById("deeming").value - 20).toFixed(2);
                                                
                                }
                                                
                                                    }
                                            }
                                
                                            else if ((parent_income == "none") && (parent_income2 == "both")) {
                                                
                                                    both2();
                                                
                                                    
                                                
                                                
                                                    if (both2) {
                                                
                                       
                                                document.getElementById("deeming").value = both2 - fbr_couple - (ineligibles * allocation).toFixed(2);

                                                        
                                                if (document.getElementById("deeming").value <= 0) {
                                    
                                    document.getElementById("deeming").value = (0).toFixed(2);
                                    document.getElementById("fci").value = (0).toFixed(2);
                                    
                                } else {
                                                document.getElementById("fci").value = (document.getElementById("deeming").value - 20).toFixed(2);
                                                
                                }
                                                
                                                    }
                                            }
                                
                                            else if ((parent_income == "unearned") && (parent_income2 == "both")) {
                                                
                                                    both2();
                                                
                                                    var unearnedpt1 = document.getElementById("unearned1").value;
                                                    
                                                    console.log(both2);
                                                    console.log(unearnedpt1);
                                                    
                                                
                                                
                                                    if (both2) {
                                                
                                       
                                                document.getElementById("deeming").value = (both2 + (parseFloat(unearnedpt1)) - fbr_couple - (ineligibles * allocation)).toFixed(2);
                                                
                                                        
                                            if (document.getElementById("deeming").value <= 0) {
                                    
                                    document.getElementById("deeming").value = (0).toFixed(2);
                                    document.getElementById("fci").value = (0).toFixed(2);
                                    
                                } else {
                                                document.getElementById("fci").value = (document.getElementById("deeming").value - 20).toFixed(2);
                                                
                                }
                                                        
                                                
                                                    }
                                            }
                                
                                            else if ((parent_income == "both") && (parent_income2 == "both")) {
                                                

                                                    var unearnedpt1 = document.getElementById("unearned1").value;
                                                
                                                    var unearnedpt2 = document.getElementById("unearned2").value;
                                                    
                                                    var earnedpt1 = document.getElementById("earned1").value;
                                                
                                                    var earnedpt2 = document.getElementById("earned2").value;

                                       
                                            document.getElementById("deeming").value = (((parseFloat(earnedpt1) + parseFloat(earnedpt2) - 65)/2) + (parseFloat(unearnedpt1) + parseFloat(unearnedpt2) - 20)  - fbr_couple - (ineligibles * allocation)).toFixed(2);

                                                
                                if (document.getElementById("deeming").value <= 0) {
                                    
                                    document.getElementById("deeming").value = (0).toFixed(2);
                                    document.getElementById("fci").value = (0).toFixed(2);
                                    
                                } else {
                                                document.getElementById("fci").value = (document.getElementById("deeming").value - 20).toFixed(2);
                                                
                                }
                                                        
                                                
                                                
                                                    
                                            }
                                

                                
                                            
                            }
                            
    
    }
    

//        document.getElementById("fci").value = document.getElementById("deeming").value - 20;
        
    
    
    


    
    
   //negates the result above only if it is a negative number
    if ((document.getElementById("ssipay").value <= 0) && (document.getElementById("fci").value >= payment)) {

        document.getElementById("ssipay").value = (0).toFixed(2);
        
    } 
        
//    else if ((document.getElementById("fci").value <= 0) && (document.getElementById("deeming").value <= 0)) {
//
//            document.getElementById("ssipay").value = (payment).toFixed(2);
//            document.getElementById("fci").value = (0).toFixed(2);
//            document.getElementById("deeming").value = (0).toFixed(2);
//            console.log("this executes");
//    }
    
    
    else if ((document.getElementById("fci").value >= payment) && (document.getElementById("deeming").value >= payment)) {
        
                document.getElementById("ssipay").value = (0).toFixed(2);
    }
    
    else if ((document.getElementById("deeming").value <= 0) && (type_of_incomeQues == "earned")) {
        
        document.getElementById("deeming").value = (0).toFixed(2);
        document.getElementById("fci").value = ((earned - 85)/2).toFixed(2);
        document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2);
    }
    
//        else if ((document.getElementById("deeming").value <= 0) && (type_of_incomeQues == "unearned")) {
//        
////        document.getElementById("deeming").value = (0).toFixed(2);
//        document.getElementById("fci").value = (unearned - 20).toFixed(2);
//        document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2);
//    }
    
    else if ((document.getElementById("deeming").value <= 0) && (type_of_incomeQues == "both")) {
        
        document.getElementById("deeming").value = (0).toFixed(2);
        //document.getElementById("fci").value = (both).toFixed(2);
        document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2);
    }
    
    
        
    else {
        
         document.getElementById("ssipay").value = (payment - document.getElementById("fci").value).toFixed(2);
    }




    
    
    
    
}

    
                    

                    calculate.addEventListener("click", calculation); 
              
                                   
                    });