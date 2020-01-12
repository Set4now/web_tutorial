function validateTextbox(){
    var name = document.getElementById("name");
    var password = document.getElementById("password");

    if (name.value == ""  || password.value == "") {

        alert("Input can't be empty");
        // make the input boxes in red if not selected
        name.focus();
        name.style.border="solid 3px red";
        
        return false;
    }
}