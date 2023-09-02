function userLogin() {
    const name = document.getElementById("names").value
    const password = document.getElementById("passs").value

    let userFound = false
    JSON.parse(localStorage.getItem('users')).forEach((element) => {
        if (name === element.name && password === element.password) {
            console.log("success, user found");
            userFound = true
        }
    })

    if (!userFound) {
        console.log("no user found")
        alert("user not found")
    } else {
        window.location.href = "homepage.html"
    }
}

function checkPasswordStrength(password){

    if(password.length <=8){
        alert('password must be greater than 8 characters')
        return false
    }
}

function checkPhoneStrength(phone){

    if(phone.length < 10){
        alert('phone must be more than 10 numbers')
        return false
    } 
}

function userRegister() {
    const name = document.getElementById("name").value
    const password = document.getElementById("pass").value
    const phone = document.getElementById("num").value

    let phoneStrengthCheck = checkPhoneStrength(phone)
    if(phoneStrengthCheck === false){
        return
    }

    let passwordStrengthCheck = checkPasswordStrength(password)
    if(passwordStrengthCheck === false) {
        return
    }

    const newUserData = {
        name,
        password,
        phone
    }

    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify([]))
    }

    const getUserData = JSON.parse(localStorage.getItem('users'))
    localStorage.setItem('users', JSON.stringify([...getUserData, newUserData]))

    console.log("data", JSON.parse(localStorage.getItem("users")))
    window.location.href = "index.html";
    // document.write("you have successfully registered")
}



