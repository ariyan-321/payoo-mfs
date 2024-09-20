let phoneNumber=document.getElementById("phone-number").value;

let passwordValue=document.getElementById("password-value").value;


document.getElementById("login-button").addEventListener("click",
    function(event){
        event.preventDefault();
        phoneNumber = document.getElementById("phone-number").value;
        
        passwordValue = document.getElementById("password-value").value;
        if(phoneNumber==="01754531341" && passwordValue==="ariyan@321"){
            window.location.href="dashboard.html"
        }
        else{
            alert("invalid number or password")
        }


    }
);



