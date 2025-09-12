// DOM Events -> An event is any action or occurrence in the browser that JavaScript can react to.
// Examples: click, hover, keypress, scroll, load, input, etc.

// let btn = document.querySelector(".btn");
// btn.onclick = function(){
//     alert("Hay")
// };

// ****** Click events ************
// to select every button
let button = document.querySelectorAll('button')

for(btns of button){
    btns.onclick = function(){
        console.log("Clicked");
    }
}


