function validateform(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let age = document.getElementById('age').value;
    let msgbox = document.getElementById('message')
    let message = ""
    if (email == "") {
      message = "email is required"
      msgbox.style.color = "red"
  
  
  
  
    }
    else if (password == "") {
      message = "password is required"
      msgbox.style.color = "red"
  
    }
    else if (age == "") {
      message = "age  is required"
      msgbox.style.color = "red"
  
    }
    else{
      message = "login successfull"
      msgbox.style.color = "blue"
    }
    msgbox.innerHTML = message
  }