// when we have elm in html page with some functionality
// but when we create same element with js dom the same existing functionality will not work on then 

let button = document.querySelectorAll('button');
let div = document.querySelector("div")

// here use  bubbling when we clicked  btn then parent of button div also trigger

// then we create new button using dom then that buttton will work Lets see

// yes its working  after commenting btnEventListener

// for(btn of button)
// btn.addEventListener('click',function(){
//     console.log("button clicked");
// })

div.addEventListener('click',function(){
    console.log("button clicked 2");
    
})

// here we create new btn using createElement and then when we click on button 3 it show "buton clicked" due to delegation

// thi problm solve using event bubbling

/**
 * let div = document.querySelector("div")
undefined

div

<div>
​<button>​button1​</button>
​<button>​button2​</button>
​</div>​

let btn = document.createElement("button")
undefined

btn

<button>​</button>​
btn.innerText = "button3"
'button3'

div

<div>
​<button>​button1​</button>
​<button>​button2​</button>
​</div>​

div.appendChild(btn)
<button>​button3​</button>​
div
 */