// Form Selector using Id
var theForm = document.getElementById('registrationForm');

// This function runs a collection of validation function on form submit event
function validateFormOnSubmit(theForm) {
    var reason = "";
    var bool = "";
    reason += validateUsername(theForm.userName);
    reason += validatePassword();
    reason += validatePhone(theForm.phoneNumber);
    reason += validatePostalCode(theForm.postalCode);
    reason += validateCity(theForm.city);

    if (reason == "") {
        bool = true;
    } else {
        bool = false;

    }

    return bool;

}

// Validates Username field
function validateUsername(fld) {
    var error = "";

    if (fld.value.length < 6) {
        error = "The username must be atleast 6 characters";
        document.getElementById('username_error').innerHTML = error;
        fld.style.backgroundColor = 'Red';
    } else if (!(/^[a-z]+$/i.test(fld.value))) {
        error = "Username must begin with letters";
        document.getElementById('username_error').innerHTML = error;
        document.getElementById('userName').style.Background = 'red';
        fld.style.backgroundColor = 'Red';
    }

    return error;
}

// Validates Password field
function validatePassword() {
    var error = "";

    var passw = document.getElementById('password').value;
    var confpassw = document.getElementById('confPassword').value;

    var passwId = document.getElementById('password');
    var confpasswId = document.getElementById('confPassword');
    var letter = /[a-z]/;
    var upper = /[A-Z]/;
    var startChar = /^[a-zA-Z]/;
    var number = /[0-9]/;

    if (passw.length < 8 || passw != confpassw || !letter.test(passw) || !number.test(passw) || !upper.test(passw) || !startChar.test(passw)) {
        if (passw.length < 8) {
            error = "Please make sure your password is longer than 8 characters";
            document.getElementById('password_error').innerHTML = error;
            passw.style.backgroundColor = 'Red';
            confpasswId.style.backgroundColor = 'Red';
            return false;
        }

        if (passw !== confpassw) {
            error = "Passwords must match";
            document.getElementById('password_error').innerHTML = error;
            passwId.style.backgroundColor = 'Red';
            confpasswId.style.backgroundColor = 'Red';
            return false;
        }

        if (!letter.test(passw)) {
            error = "Passwords must include a lowercase letter";
            document.getElementById('password_error').innerHTML = error;
            passwId.style.backgroundColor = 'Red';
            confpasswId.style.backgroundColor = 'Red';
            return false;
        }

        if (!startChar.test(passw)) {
            error = "Passwords must begin with a character";
            document.getElementById('password_error').innerHTML = error;
            passwId.style.backgroundColor = 'Red';
            confpasswId.style.backgroundColor = 'Red';
            return false;
        }

        if (!number.test(passw)) {
            error = "Password must include atleast a digit";
            document.getElementById('password_error').innerHTML = error;
            passwId.style.backgroundColor = 'Red';
            confpasswId.style.backgroundColor = 'Red';
            return false;
        }

        if (!upper.test(passw)) {
            error = "Password must include an uppercase letter";
            document.getElementById('password_error').innerHTML = error;
            passwId.style.backgroundColor = 'Red';
            confpasswId.style.backgroundColor = 'Red';
            return false;
        }
    }

    return error;
}

// Validates Phone field
function validatePhone(fld) {
    var error = "";
    var numberPattern = /^\d{3}-\d{3}-\d{4}$/gm;

    if (!numberPattern.test(fld.value)) {
        error = "Enter phone number in the appropriate pattern";
        document.getElementById('phone_error').innerHTML = error;
        fld.style.backgroundColor = 'Red';
        return false;
    }

    return error;
}

// Validates Postal code field
function validatePostalCode(fld) {
    var error = "";
    var pattern = /^[ABCEGHJ-NPRSTVXY][0-9][ABCEGHJ-NPRSTV-Z][0-9][ABCEGHJ-NPRSTV-Z][0-9]$/;

    if (!pattern.test(fld.value)) {
        error = "Incorrect postal code. Please enter correctly";
        document.getElementById('pc_error').innerHTML = error;
        fld.style.backgroundColor = 'Red';
        
        return false;
    }

    if (fld.value > 6) {
        error = "Postal code must be 6 characters";
        document.getElementById('pc_error').innerHTML = error;
        fld.style.backgroundColor = 'Red';
        return false;
    }

    return error;
}``

// Validates City field
function validateCity() {
    var error = "";
    var letter = /^[A-Za-z]/;

    var city = document.getElementById('city').value;
    var city_ = document.getElementById('city')
    if (!letter.test(city)) {
        error = "City name must contain only letters";
        document.getElementById('city_error').innerHTML = error;
        city_.style.backgroundColor = 'Red';
        return false;
    }

    return error;
}