 function consoleValidation(form) {
            let auth_KEY="";
            auth_KEY = document.forms["console_validation"]["auth_KEY"].value;
            if (auth_KEY.length == 0) { 
                alert("This field is manditory.");
            }
            else if(auth_KEY != "ADMIN1324") {
                alert("Authorisation key is invalid.");
            }
            else {
                form.submit();
            }
}
