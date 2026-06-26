const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

const loginBtn = document.getElementById("loginBtn");
const btnText = document.getElementById("btnText");

// ===========================
// Show / Hide Password
// ===========================

togglePassword.addEventListener("click", () => {

    if(password.type === "password"){
        password.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    }
    else{
        password.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }

});

// ===========================
// Password Strength Checker
// ===========================

password.addEventListener("input", ()=>{

    let value = password.value;
    let strength = 0;

    if(value.length >= 6)
        strength++;

    if(/[A-Z]/.test(value))
        strength++;

    if(/[0-9]/.test(value))
        strength++;

    if(/[!@#$%^&*]/.test(value))
        strength++;

    switch(strength){

        case 0:
            strengthBar.style.width="0%";
            strengthText.innerHTML="";
            break;

        case 1:
            strengthBar.style.width="25%";
            strengthBar.style.background="red";
            strengthText.innerHTML="Weak Password";
            break;

        case 2:
            strengthBar.style.width="50%";
            strengthBar.style.background="orange";
            strengthText.innerHTML="Medium Password";
            break;

        case 3:
            strengthBar.style.width="75%";
            strengthBar.style.background="gold";
            strengthText.innerHTML="Strong Password";
            break;

        case 4:
            strengthBar.style.width="100%";
            strengthBar.style.background="limegreen";
            strengthText.innerHTML="Very Strong Password";
            break;

    }

});

// ===========================
// Login Validation
// ===========================

form.addEventListener("submit", function(e){

    e.preventDefault();

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.value.trim()===""){
        alert("Please enter your email.");
        return;
    }

    if(!emailPattern.test(email.value)){
        alert("Please enter a valid email.");
        return;
    }

    if(password.value.trim()===""){
        alert("Please enter your password.");
        return;
    }

    if(password.value.length<6){
        alert("Password must contain at least 6 characters.");
        return;
    }

    // Loading Animation

    loginBtn.disabled=true;
    btnText.innerHTML="Logging In...";

    setTimeout(()=>{

        alert("🎉 Login Successful!");

        form.reset();

        strengthBar.style.width="0%";
        strengthText.innerHTML="";

        loginBtn.disabled=false;
        btnText.innerHTML="Login";

        password.type="password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");

    },2000);

});