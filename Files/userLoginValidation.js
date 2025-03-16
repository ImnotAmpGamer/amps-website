function userLoginValidation(form) {
            let user="";
            let password="";
            user = document.forms["userLogin"]["username"].value;
            password = document.forms["userLogin"]["password"].value;
            if (user.length == 0 || password.length == 0) { 
                alert("Username and password cannot be blank.");
            }
            else if(user != "User0001" || password != "1324") {
                alert("Incorrect User name password combination.");
            }
            else {
                form.submit();
            }
}
