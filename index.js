function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username == "stephencondino" && password == "123456789"){
         window.location.href = "home.html";
        } 
    else{
        alert("Invalid username or password. Please try again.");
    
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";

        location.reload();
    }
        }
    