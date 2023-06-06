// Carousel
let currentIdx = 0

// Carousel Movement Using Arrow
function commandArrow(n){
    currentIdx += n;
    if(currentIdx < 0) currentIdx = 2
    if(currentIdx > 2) currentIdx = 0
    manualMove(currentIdx)
}

// Carousel Movement Using Button
function commandButton(n){
    currentIdx = n
    manualMove(currentIdx)
}

// Move The Carousel (Manual)
function manualMove(pos){
    var slides = document.getElementsByClassName("promotion-box")
    var buttons = document.getElementsByClassName("command-button")

    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }

    for(let i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundColor = "white"
    }

    slides[pos].style.display = "flex"
    buttons[pos].style.backgroundColor = "#999999"
}

// Move The Carousel (Auto) Every 3 Seconds
setInterval(autoMove, 3000)  
function autoMove(){
    var slides = document.getElementsByClassName("promotion-box")
    var buttons = document.getElementsByClassName("command-button")

    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none"
    }

    for(let i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundColor = "white"
    }

    currentIdx++;
    if(currentIdx < 0) currentIdx = 2
    if(currentIdx > 2) currentIdx = 0

    slides[currentIdx].style.display = "flex"
    buttons[currentIdx].style.backgroundColor = "#999999"
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