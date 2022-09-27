
let username = document.getElementById('firstname');
let email = document.getElementById('email');
let tel = document.getElementById('tel');
let firstnameError = document.getElementById('firstnameError');
let emailError = document.getElementById('emailError');
let telError = document.getElementById('telError');
let submiterror = document.getElementById('submiterror');


    function  validateName() 
    { 
        if(username.value.length == 0) 
        { 
            firstnameError.innerHTML = " Name is Required" ; 
            return false; 
        } 

        if(!username.value.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/))  
        { 
             firstnameError.innerHTML = " Write Full Name " ; 
             return false;
        }
        
             firstnameError.innerHTML = " valid " ;  
             return true;
    }


    function validateEmail() 
    { 
        if(email.value.length  == 0) 
        { 
            emailError.innerHTML = " Email is  required "; 
            return false; 
        }
        if(!email.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) 
        {  
            emailError.innerHTML = " Email invalid " ;
            return false;
        } 

          emailError.innerHTML = " Done MAIL " ; 
          return true;

    }

    function validatetell() 
    { 
        if(tel.value.length  == 0) 
        { 
            telError.innerHTML = " Phone no is required " ;
            return false; 
        }
        if(tel.value.length > 10) 
        {  
            telError.innerHTML = "Not  more than 10 numbers needed" ; 
            return false;
        }
        if(!tel.value.match(/^[0-9]{10}$/))
            {
                telError.innerHTML = " Only Digits Please " ; 
                return false;
            } 

          tel.innerHTML  = " Done Phn ";
          return true;  

    }

        function validateform()
        {
            if(!validateEmail() || !validateName() || !validatetell() )
            {
                submiterror.innerHTML = "PLease fix  the Error to submit";
                return false;
            }
        }

