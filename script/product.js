// Function to change view to specificed location
function changeView(url){
    window.location = url
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