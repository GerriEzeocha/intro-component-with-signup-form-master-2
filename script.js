document.getElementById("btn_claim").addEventListener("click", validateForm);

function validateForm(){

  let fName = document.getElementById("fName").value;
  let lName = document.getElementById("lName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;


  if(fName == ""){
    document.getElementById("labelFN").innerHTML = "First Name cannot be empty";
    document.querySelector("input[name='fName']").style.border = "0.125rem solid #ff7a7a";
    document.querySelector("input[name='fName']").placeholder = "";
    document.querySelector("input[name='fName']").style.background = "url(/images/icon-error.svg) no-repeat";
    document.querySelector("input[name='fName']").style.backgroundPosition = "95% 8px";

  }

  if(lName == ""){
    document.getElementById("labelLN").innerHTML = "Last Name cannot be empty";
    document.querySelector("input[name='lName']").style.border = "0.125rem solid #ff7a7a";
    document.querySelector("input[name='lName']").placeholder = "";
    document.querySelector("input[name='lName']").style.background = "url(/images/icon-error.svg) no-repeat";
    document.querySelector("input[name='lName']").style.backgroundPosition = "95% 8px";
  }

  if(password == ""){
    document.getElementById("labelP").innerHTML = "Password cannot be empty";
    document.querySelector("input[name='password']").style.border = "0.125rem solid #ff7a7a";
    document.querySelector("input[name='password']").placeholder = "";
    document.querySelector("input[name='password']").style.background = "url(/images/icon-error.svg) no-repeat";
    document.querySelector("input[name='password']").style.backgroundPosition = "95% 8px";
    
  } 

  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
 if((email != "") && !(email.match(validRegex))){
        document.getElementById("labelE").innerHTML = "Looks like this is not an email";
        document.getElementById("email").style.color = "#ff7a7a";
        document.querySelector("input[name='email']").style.border = "0.125rem solid #ff7a7a";
        document.querySelector("input[name='email']").style.background = "url(/images/icon-error.svg) no-repeat";
        document.querySelector("input[name='email']").style.backgroundPosition = "95% 8px";
    } else {
      document.getElementById("labelE").innerHTML = "email cannot be empty";
      document.querySelector("input[name='email']").placeholder = "";
      document.querySelector("input[name='email']").style.background = "url(/images/icon-error.svg) no-repeat";
      document.querySelector("input[name='email']").style.backgroundPosition = "95% 8px";
    }
  

} 


