// Form Validation
function submitForm(){
    form = document.getElementById("formContact")
    fullname = document.getElementById("fullname")
    email = document.getElementById("email")
    phonenumber = document.getElementById("phonenumber")
    ramen = document.getElementById("ramen")
    dryramen = document.getElementById("dryramen")
    agree = document.getElementById("agree")

    errorName = document.getElementById("error-name")
    errorEmail = document.getElementById("error-email")
    errorPhone = document.getElementById("error-phone")
    errorPreferences = document.getElementById("error-preferences")
    errorAgree = document.getElementById("error-agree")

    if(fullname.value != "") errorName.innerHTML = ""
    if(email.value != "") errorEmail.innerHTML = ""
    if(phonenumber.value != "") errorPhone.innerHTML = ""
    if(ramen.checked || dryramen.checked) errorPreferences.innerHTML = ""
    if(agree.checked) errorAgree.innerHTML = ""

    if(fullname.value == ""){
        errorName.innerHTML = "Full name is required to be filled."
        return false
    } else if(fullname.value.length < 5){
        errorName.innerHTML = "Full name must be atleast 5 characters."
        return false
    } 
    
    if(email.value == ""){
        errorEmail.innerHTML = "Email is required to be filled."
        return false
    } else if(!isValid(email.value)){
        return false
    }
    
    if(phonenumber.value == ""){
        errorPhone.innerHTML = "Phone number is required to be filled."
        return false
    } else if(isNaN(phonenumber.value)){
        errorPhone.innerHTML = "Phone number must be numeric."
        return false
    } else if(phonenumber.value.length < 8){
        errorPhone.innerHTML = "Phone number must be at least 8 number."
        return false
    }
    
    if(!(ramen.checked || dryramen.checked)){
        errorPreferences.innerHTML = "Preferences is required to be filled."
        return false
    } 

    if(!agree.checked){
        errorAgree.innerHTML = "You must agree to receive newsletter."
        return false
    }

    alert("Thank you for filling out the form.")
    form.submit()
}

// Function to check if an email is valid or no
function isValid(email){
    let countA = 0
    let countDot = 0

    for(let i = 0; i < email.length; i++){
        if(email[i] == '@'){
            countA++
            posA = i
        } else if(email[i] == '.'){
            countDot++;
        }
    }

    if(countA != 1){
        errorEmail.innerHTML = "Email must contain one [@]"
        return false
    } 

    if(email.split("@")[0].length == 0){
        errorEmail.innerHTML = "There must be a text before [@]"
        return false
    } else if(email.split("@")[1].length == 0){
        errorEmail.innerHTML = "There must be a text after [@]"
        return false
    } else if(email.split("@")[1][0] == '.'){
        errorEmail.innerHTML = "[.] can't be directly behind [@]"
        return false    
    } 
    
    if(countDot != 1){
        errorEmail.innerHTML = "Email must contain one [.]"
        return false
    }
    
    if(email.split(".")[1].length == 0){
        errorEmail.innerHTML = "There must be a text behind [.]"
        return false
    }

    return true
}

// Toggle Hamburger Button
let open = false

function toggle(){
    if(open == false){
        open = true
        document.getElementById("hamburger-menu").style.display = "flex"
    } else if(open == true){
        open = false
        document.getElementById("hamburger-menu").style.display = "none"
    }
}