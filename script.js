function submitData(){

    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let message = document.getElementById("message").value

    if( username =="" || email =="" || message =="" ){
        alert("please fill out all value")
    }else{
        let userData = {
            name:username,
            emali:email,
            message:message
        }
        console.log(userData);

     username = document.getElementById("username").value=""
     email = document.getElementById("email").value=""
     message = document.getElementById("message").value=""

    }



}
