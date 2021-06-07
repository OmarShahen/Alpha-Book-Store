



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

