/**
 * mouseenter -> when the mouse pointer enters the element.
 * dblclick -> Mouse button is double-clicked
 */

let h1 = document.querySelector("h1");
console.log(h1);

// onmouseenter
h1.onmouseenter = function(){
    console.log("mouse entered");
}

// ondblclick
h1.ondblclick = function(){
    console.log("Double clicked");
}

// onclick
h1.onclick = function(){
    console.log("Simple Clicked");
}

// addEventListener(event,callBack) -> A method to attach events (like click, mouseenter, keydown, etc.) to elements.

let btn = document.querySelector("button")
console.log(btn);

btn.addEventListener("click",function(){
    console.log("Button was Clicked");
})

btn.addEventListener("dblclick",(el)=>{
    console.log(el);
    console.log("Button was DBL Clicked");  
})