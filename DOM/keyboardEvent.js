// Keyboard Events
let btn = document.querySelector("button")

btn.addEventListener("click",function(elm){
    console.log(elm);
    console.log("KeyPress")
})

let inpt = document.querySelector("input")
let msg = document.querySelector(".msg")
let msg1 = document.querySelector(".msg1")
let msg2 = document.querySelector(".msg2")
inpt.addEventListener("keypress",function(el){
    // console.log("KeyPress");
    // console.log(el);
    // console.log(el.code);
    console.log(el.key);
    msg.textContent = `${el.key}`
})

// Fires when key is pressed down
  inpt.addEventListener("keydown", (event) => {
    msg1.textContent = `Key down: ${event.key}`;
  });

  // Fires when key is released
  inpt.addEventListener("keyup", (event) => {
    msg2.textContent = `Key up: ${event.key}`;
  });