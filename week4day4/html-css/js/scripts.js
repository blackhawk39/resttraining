const form = document.getElementById("register-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("err-msg").innerHTML = "";

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneno = document.getElementById("phoneno").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(validName(firstName) && validName(lastName) && validPhoneno(phoneno) && validUsername(username) && validPassword(password)){
        window.location.href = "http://127.0.0.1:5500/success.html";
    }
})

function resetForm(){
    form.reset();
}

function validName(name){
    var regex = /^[a-zA-Z]{2,50}$/;
    if(!regex.test(name)){
        document.getElementById("err-msg").innerHTML = "Invalid name/ name too long";
    }
    return regex.test(name);
}

function validPhoneno(phoneno){
    if(phoneno.length != 10){
        document.getElementById("err-msg").innerHTML = "Phone number must contain only 10 digits";
        return false;
    }

    var regex = /^[0-9]{10}$/;
    if(!regex.test(phoneno)){
        document.getElementById("err-msg").innerHTML = "Invalid Phone number";
    }
    return regex.test(phoneno);
}

function validUsername(username){
    if(username.length < 5){
        document.getElementById("err-msg").innerHTML = "User name must contain minimum 5 characters";
        return false;
    }

    var regex = /^[a-zA-Z]{5,50}$/;
    if(!regex.test(username)){
        document.getElementById("err-msg").innerHTML = "Invalid user name";
    }
    return regex.test(username);
}

function validPassword(password){
    if(password.length < 8){
        document.getElementById("err-msg").innerHTML = "Password must contain minimum 8 characters";
        return false;
    }

    var regex =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
    if(!password.match(regex)){
        document.getElementById("err-msg").innerHTML = "Password must contain atleast 1 special character and 1 digit";
    }
    return password.match(regex);
}