let submitbut =document.getElementById('submitted');
let emailerror =document.getElementById('error')
let passworderror =document.getElementById('passerror');
submitbut.addEventListener('click',(e)=>{
    e.preventDefault();
    if (emailvalidation()) {
        alert('Email submitted Successfully')
    }
    if (passwordvalidation()) {
        alert('password submitted Successfully')
    }
});
function emailvalidation() {
    let email = document.getElementById('Emailbut').value;
    if (email.length == 0) {
        emailerror.innerHTML ="Email is Required";
      return false;
    }
    emailerror.innerHTML ="";
    return true;
}


function passwordvalidation() {
    let pass = document.getElementById('passbut').value;
    if (pass.length == 0) {
        passworderror.innerHTML ="Password is Required";
      return false;
    }
   
    passworderror.innerHTML ="";
    return true;
}