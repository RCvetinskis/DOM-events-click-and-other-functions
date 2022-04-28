"use strict"

var buttons = document.getElementsByTagName("button")
var divs = document.getElementsByTagName("div")
var heading = document.getElementsByTagName("h2")
var clicked = false;

// fono spalvos keitimas
buttons[0].addEventListener("click",function(){
    divs[0].classList.toggle("background")
})

// teksto keitimas :
buttons[1].addEventListener("click",function(){
// 1 variantas
    // if(!clicked){
    //     heading[1].innerText = "tekstas pakeistas"
    //     clicked=true;

    // } else {
    //     heading[1].innerText = "DOM 2"
    //     clicked= false;
    // }
// 2 variantas
    if (heading[1].innerText === "DOM 2"){
            heading[1].innerText = "tekstas pakeistas"
        } else {
            heading[1].innerHTML = "DOM 2"
        }
     


 

//    heading[1].textContent = "tekstas pakeistas"
    // budas  pakeisti teksta:
    // heading[1].innerHTML = 
    // `   <h2> Pakeistas tekstas</h2>
    // <button>Paspausk ir pakeisk teksta</button>
    // `

})
// pakeicia fona uzejus laikinai :
buttons[2].addEventListener("mouseover",function(){
    divs[2].classList.toggle("background")
})
buttons[2].addEventListener("mouseout",function(){
    divs[2].classList.remove("background")
})

// pakeicia fona iki kito uzejimo:
buttons[3].addEventListener("mouseover",function(){
    divs[3].classList.toggle("background")
})
