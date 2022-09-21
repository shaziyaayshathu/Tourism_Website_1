var user=document.getElementById("uname");
var email=document.getElementById("semail");
var phn=document.getElementById("phone");
var pswd1=document.getElementById("password1");
var pswd2=document.getElementById("password2");


//-----Advanced validations on email,phone and password in Sign up form begins----------------
function validateS()
{
    document.getElementById("fieldErr").textContent="";
    document.getElementById("emailErr").textContent="";
    document.getElementById("phoneErr").textContent="";
    document.getElementById("passErr").textContent="";
   
    var email_regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var pswd_regex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
    var phone_regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/; 
   
    
  if(user.value =="")
  {
    document.getElementById("fieldErr").style.backgroundColor = 'red';
    document.getElementById("fieldErr").textContent="Username cannot be empty"

    //document.getElementById("semail").style.border="2px solid red";
    document.getElementById("semail").focus();
    return false;
  }
 
  else if(email_regex.test(email.value) != "1" || email.value== " ")
  {
    document.getElementById("emailErr").style.backgroundColor = 'red';
    document.getElementById("emailErr").textContent="Please enter a valid Email";
    document.getElementById("semail").style.border="2px solid red";
    document.getElementById("semail").value="";
    document.getElementById("semail").focus();
    return false;
  }
  
  else if(phone_regex.test(phn.value) != "1" || phn.value == " " )
  {
    document.getElementById("phoneErr").style.backgroundColor = 'red';
    document.getElementById("phoneErr").textContent="Please enter a valid phone number";
    phn.style.border="2px solid red";
    phn.value='';
    phn.focus();
    return false;
  }
  else if(pswd_regex.test(pswd1.value) != "1" ||  pswd1.value== " ")
  {
    alert("Passwords should be of minimum 8 characters and must include an uppercase letter,a lowercase letter,a numeric and a special character !");
    document.getElementById("passErr").style.backgroundColor = 'red';
    document.getElementById("passErr").textContent="Please enter a valid Password";
    
    pswd1.value='';
    pswd2.value='';
    pswd1.style.border="2px solid red";
    pswd1.focus();
    return false;
  }
  else if(pswd1.value !== pswd2.value)
  {
    document.getElementById("confPassErr").style.backgroundColor = 'red';
    document.getElementById("confPassErr").textContent="Password does not match";
    pswd2.value='';
    pswd2.style.border="2px solid red";
    pswd2.focus();
    return false;
  }
 
    
}

//--------------Validation on sign Up form ends-------------------------------

//------------validation on Login form begin------------------------

var email_login=document.getElementById("email");
var pswd_login=document.getElementById("password");
const PASS="password"
function validateL()
{
    document.getElementById("logEmailErr").textContent=""; 
    document.getElementById("credErr").textContent="";
    
    var email_login_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
   if(email_login==' ' || pswd_login==' ')
   {
    alert("Email or Password cannot be empty");
    return false;
   }
    else if(email_login_regex.test(email_login.value) != "1")
    {
        
        document.getElementById("logEmailErr").style.backgroundColor = 'red';
        document.getElementById("logEmailErr").textContent="Please enter a valid email";
        email_login.value="";
        email_login.style.border="2px solid red";
        email_login.focus();
        return false;
    }
    else if(pswd_login.value!= "pass")
    {
        document.getElementById("credErr").style.backgroundColor = 'red';
        document.getElementById("credErr").textContent="Invalid credentials !";
        email_login.value="";
        pswd_login.value="";
        return false;
    }
    

}
//--------------Validation on login form ends------------------------

//---------------- To check password strength in Sign up form-------------------

let password = document.getElementById('password1');
let strengthBadge = document.getElementById('StrengthDisp');
let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))')
function checkStrength() {
if(strongPassword.test(password.value)) {
    strengthBadge.style.backgroundColor = "green";
    strengthBadge.textContent = 'Strong';
} else if(mediumPassword.test(password.value)) {
    strengthBadge.style.backgroundColor = 'orange';
    strengthBadge.textContent = 'Medium';
} else {
    strengthBadge.style.backgroundColor = 'red';
    strengthBadge.textContent = 'Weak';
}
if(password.value.length !== 0){
    strengthBadge.style.display != 'block'
} else{
    strengthBadge.style.display = 'none'
}
};
















