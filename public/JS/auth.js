

// Remove confirm password error message
document.querySelector("#confirmUserPassword").addEventListener("focus", ()=>{

    document.querySelector(".confirm-password-error").style.display="none";
});

// Remove email error message
document.querySelector("#userEmail").addEventListener("focus", ()=>{
    document.querySelector(".email-error").style.display="none";
});

//Login form link
document.querySelector("#signin-link").addEventListener("click", (e)=>{
    e.preventDefault();
    signIn();
});



// Add user
const signUpForm = document.querySelector("#sign-up-form");

signUpForm.addEventListener("submit", (e)=>{

    e.preventDefault();

    const user = {
        userName: signUpForm["userName"].value,
        email: signUpForm["userEmail"].value,
        password: signUpForm["userPassword"].value,
        confirmedPassword: signUpForm["confirmUserPassword"].value,
        userPhoneNumber: signUpForm["userPhoneNumber"].value
    };

    if(user.password != user.confirmedPassword){
        document.querySelector(".confirm-password-error").style.display = "block";
        return;
    }

    auth.createUserWithEmailAndPassword(user.email, user.password)
    .then(cred => {
        console.log(cred.user.uid);
        console.log(cred);
        signUpForm.reset();
    })
    .catch(err=>{
        document.querySelector(".email-error").style.display="block";
        document.querySelector(".email-error").innerHTML=err.message;
    });











});








function signIn(){
    
    document.querySelector("#form-title").innerHTML="Sign In";
    document.querySelector("#sign-up-form").style.display="none";
    document.querySelector("#sign-in-form").style.display="block";
}

function signUp(){
    
    document.querySelector("#form-title").innerHTML="Sign Up";
    document.querySelector("#sign-up-form").style.display="block";
    document.querySelector("#sign-in-form").style.display="none";
}

