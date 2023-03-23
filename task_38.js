function validateEmail(email_id){
    let email=/^\S+@\S+\.+\S/;
    if(email.test(email_id)){
        console.log("The Email is valid");
    }
    else{
        console.log("The Email is invalid");
    }
}
validateEmail("gokul13@gamil.com");
validateEmail("gokul13gamil.com");
validateEmail("gokul13@gamilcom");
validateEmail("gokul13@gamil")


