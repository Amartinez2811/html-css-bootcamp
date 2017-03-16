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
       
                                    
        
                        var tracker = 15;

                        for(var i = 0; i <= 15; i++) {


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



                                                    parseFloat($(this).val()).toFixed(2);


                                        } else if (typeinc == "unearned") {


                                                $("#selection").html('<label for="uninc">Unearned income: </label><input type="text" id="uninc" name="uninc"/>');

                                                parseFloat($(this).val()).toFixed(2);

                                        } else if (typeinc == "both") {
                                        
                                                $("#selection").html('<p><label for="eninc">Earned income: </label><input type="text" id="eninc" />\
                                                <label for="uninc">Unearned income: </label><input type="text" id="uninc" /></p>');

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


                      } else  {

                            $("#parent").show();

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
                            

                        } else if ((10 >= month <= 12) && (year == 2014) && (state == "NY") || (year >= "2015") && (state == "NY") || (state == "ME" ) || (state == "WY" )|| (state == "WA" )) {

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


                        } else if (state == "DE") {

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



                        } else if (state == "NJ") {

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
                     
                                                    $("#incpt").change(function(){
                                        
                                        
                                                            var parent1inc = $(this).val();
                                       
                                                            if (parent1inc == "earned") {
                                                           
                                                                $("#pttype").html('<label for="earned1">Earned income: </label><input type="text" id="earned1" />');
                                                           
                                                            } else if (parent1inc == "unearned") {
                                                                
                                                            
                                                                $("#pttype").html('<label for="unearned1">Unearned income: </label><input type="text" id="unearned1" />');
                                                           
                                                            } else if (parent1inc == "both") {
                                                            
                                                                $("#pttype").html('<label for="earned1">Earned income: </label><input type="text" id="earned1" />\
                                                                <label for="unearned1">Unearned income: </label><input type="text" id="unearned1" />');
                                       
                                                            } else if (parent1inc == "none") {
                                                                
                                                                $("#pttype").html('');
                                       
                                                            }
                                        
                                        
                                        });
                     
                                } else if(parents == 2) {
                                            $("#ptsinc").html('<div class="pt1"><label for="incpt">What type of income does parent 1 have? </label>\
                                                              <select id="incpt">\
                                                                    <option value= null>--Select--</option>\
                                                                    <option value="earned">Earned</option>\
                                                                    <option value="unearned">Unearned</option>\
                                                                    <option value="both">Both</option>\
                                                                    <option value="none">None</option>\
                                                              </select>\
                                                              </div>\
                                                              <div class="pt2"><label for="incpt2">What type of income does parent 2 have? </label>\
                                                              <select id="incpt2">\
                                                                    <option value= null>--Select--</option>\
                                                                    <option value="earned">Earned</option>\
                                                                    <option value="unearned">Unearned</option>\
                                                                    <option value="both">Both</option>\
                                                                    <option value="none">None</option>\
                                                              </select>\
                                                              </div>');

                                                       $("#inelig_child").show();
                                                       $("#pttype").html('');


                                            $("#incpt").change(function() {
                                                
                                                        var parent1inc = $(this).val();
                                       
                                                        if (parent1inc == "earned"){

                                                                $("#pttype").html('<label for="earned1">Earned income for Parent 1: </label><input type="text" id="earned1" />');


                                                        } else if (parent1inc == "unearned") {

                                                                $("#pttype").html('<label for="unearned1">Unearned income for Parent 1: </label><input type="text" id="unearned1" />');

                                                        } else if (parent1inc == "both") {

                                                                $("#pttype").html('<label for="unearned1">Unearned income for Parent 1: </label><input type="text" id="unearned1" />\
                                                              <label for="earned1">Earned income for Parent 1: </label><input type="text" id="earned1" />');

                                                        } else if (parent1inc == "none") {

                                                                $("#pttype").html('');
                                                        }
                                      
                      
                                            $("#incpt2").change(function() {
           
                                                        var parent2inc = $(this).val();
      
                          
                          
                                                        if (parent2inc == "earned") {

                                                              $("#pttype2").html('<label for="earned2">Earned income for Parent 2: </label><input type="text" id="earned2" />');

                                                        } else if (parent2inc == "unearned") {

                                                              $("#pttype2").html('<label for="unearned2">Unearned income for Parent 2: </label><input type="text" id="unearned2" />');

                                                        } else if (parent2inc == "both") {

                                                              $("#pttype2").html('<label for="unearned2">Unearned income for Parent 2: </label><input type="text" id="unearned2" />\
                                                                                  <label for="earned2">Earned income for Parent 2: </label><input type="text" id="earned2" />');

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
                            
                        
                        } else {
                        
                        $("#total_inc_inelig").hide();
                            
                        
                        
                        }
            
            
                });
});
 
 
//function to populate child select box
   
    
function list(array_list)
{
    $("#state_supp").html(""); //reset child options
    $(array_list).each(function (i) { //populate child options
        $("#state_supp").append("<option value=\""+array_list[i].value+"\">"+array_list[i].display+"</option>").show();
    });
}
   
        
//        
//        var ssn = $("#ssn").val();
//        
//        if (ssn == "") {
//            
//            $("#err1").show();
//            
//        
//        } else {
//            
//            $("#err1").hide();
//        }

    
    $('#submit').on("click",function() {
        
        var ssn = $("#ssn").val();
        
        if (ssn == "") {
            
            $("#err1").show();
            
                if ((month == "") || (month == null)) {
                    
                    $("#err2").show();
                
                } else {
                    
                    $("#err2").hide();
                    
                }
                    if ((year == "") || (year == null)) {
                    
                    $("#err3").show();
                        
                } else {
                    
                    $("#err3").hide();
                    
                }
            
        } else {
            
            $("#err1").hide();
            
        }


    
    });
 
       
});