document.getElementById("btn_claim").addEventListener("click", validateInput);

function validateInput(){
    let inputs = document.querySelectorAll("input[type ='text']");
    let email = document.querySelector("input[type ='email']");

    inputs.forEach(input => {
        if(input.value == ""){
            document.querySelector('label[for='+`${input.name}`+']').innerHTML = `${input.placeholder}`+" cannot be empty";
            input.placeholder = ""; 
            input.classList.add('errorState');
        } 
    });

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if((email.value != "") && !(email.value.match(validRegex))){
        document.querySelector('label[for='+`${email.name}`+']').innerHTML = "Looks like this is not an email"; 
        email.placeholder = "";
        email.classList.add('errorState');
        return
    } else if(email.value == "") {
        email.classList.add('errorState');
        document.querySelector('label[for='+`${email.name}`+']').innerHTML = `${email.placeholder}`+" cannot be empty";
        email.placeholder = "";
    }

}