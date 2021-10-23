document.querySelector('button[name="submitForm"]').addEventListener('click',(event) => {
    event.preventDefault();
    let form = document.getElementById('submitForm').elements;
    let email = verifyFields([isBlank(form['email'].value),isEmail(form['email'].value)]);
    let firstname = verifyFields([isBlank(form['firstname'].value),verifyCorrectNameField(form['firstname'].value)]);
    let lastname = verifyFields([isBlank(form['lastname'].value),verifyCorrectNameField(form['lastname'].value)]);
    let tel  = verifyFields([isBlank(form['tel'].value),isOnlyNumbers(form['tel'].value)]);
    let error;
    emailError = document.querySelector('input[name="email"]').previousElementSibling;
    emailError.innerHTML = '';
    firstnameError = document.querySelector('input[name="firstname"]').previousElementSibling;
    firstnameError.innerHTML = '';
    lastnameError = document.querySelector('input[name="lastname"]').previousElementSibling;
    lastnameError.innerHTML = '';
    messageError = document.querySelector('textarea[name="message"]').previousElementSibling;
    messageError.innerHTML = '';
    telError = document.querySelector('input[name="tel"]').previousElementSibling;
    telError.innerHTML = '';

    if(email != true) {
        emailError.innerHTML = email;
        error = false;
    }
    if(firstname != true) {
        firstnameError.innerHTML = firstname;
        error = false;
    }
    if(lastname != true) {
        lastnameError.innerHTML = lastname;
        error = false;
    }
    if(isBlank(form['message'].value) != true) {
        messageError.innerHTML = isBlank(form['message'].value);
        error = false;
    }
    if(tel != true) {
        telError.innerHTML = tel;
        error = false;
    }

    if (error != false) {
        $.ajax({

            type : "POST",
            dataType : "json",
            url : "form.php",
            data: {
                'email' : form['email'].value,
                'firstname' : form['firstname'].value,
                'lastname' : form['lastname'].value,
                'tel' : form['tel'].value,
                'message' : form['message'].value
            },
            statusCode: {
                200: function() {
                    alert('Email address is valid');
                 },
                400:function(){
                    alert('Email address is not valid');
                 }
               }
        });
                
    } 
})

function verifyFields(verifications) {
    let message = '';
    verifications.forEach(verification => {
        if(verification != true) {
            message = verification;
        }
        
    });
    if (message != '') {
        return message;
    }
    return true;
}

function isBlank(data) {
    if (data.trim() == '' || data == undefined || data == null) {
        return 'This field is required';
    }
    return true;
}

function verifyCorrectNameField(data) {
    if (!data.match(/^[a-z ,.'-]+$/i)) {
        return "This field is not correct"
    }
    return true;
}

function isOnlyNumbers(data) {
    if(/\d/.test(data)) {
        return true;
    }
    return 'This field must contains only numbers';
    
}

function isEmail(data) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data)) {
        return true;
    }
    return "This email doesn't look right";
}