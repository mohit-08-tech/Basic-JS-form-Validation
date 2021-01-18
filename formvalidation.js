function Validate() {
    var username = document.getElementById('IdUserName').value;
    var pass = document.getElementById('IdPassword').value;
    var confpass = document.getElementById('IdConfirmPassword').value;
    var mobno = document.getElementById('IdMobileNo').value;
    var email = document.getElementById('IdEmail').value;

    //USERNAME
    if (username == "") {
        document.getElementById('UserName').innerHTML = "**User Name can't be blank";
        return false;
    }
    if ((username.length <= 2) || (username.length>30)) {
        document.getElementById('UserName').innerHTML = "**User Name must be 2 to 30 characters";
        return false;
    }
    if (!isNaN(username)) {
        document.getElementById('UserName').innerHTML = "**User Name must be string";
        return false;
    }
    //PASSWORD
    if (pass == "") {
        document.getElementById('Password').innerHTML = "**Password can't be blank";
        return false;
    }
    if (pass.length < 5) {
        document.getElementById('Password').innerHTML = "**Password length must be 5 characters";
        return false;
    }
    //CONFIRM PASSWORD
    if (confpass == "") {
        document.getElementById('ConfirmPassword').innerHTML = "**Confirm Password can't be blank";
        return false;
    }
    if (confpass != pass) {
        document.getElementById('ConfirmPassword').innerHTML = "**Password doesn't match";
        return false;
    }
    //MOBILE NUMBER
    if (mobno == "") {
        document.getElementById('MobileNo').innerHTML = "**Mobile No Name can't be blank";
        return false;
    }
    if (mobno.length != 10) {
        document.getElementById('MobileNo').innerHTML = "**Mobile No must me 10 digits";
        return false;
    }
    if (isNaN(mobno)) {
        document.getElementById('MobileNo').innerHTML = "**Please enter a valid mobile number";
        return false;
    }
    //EMAIL ID
    if (email == "") {
        document.getElementById('Email').innerHTML = "**Email Name can't be blank";
        return false;
    }
    if (email.indexOf("@")<= 0) {
        document.getElementById('Email').innerHTML = "**Invalid email";
        return false;
    }
    if ((email.charAt(email.length - 4) != ".") && (email.charAt(email.length-3)!=".")) {
        document.getElementById('Email').innerHTML = "**Invalid email";
        return false;
    }

}