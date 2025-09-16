let btn1 = document.querySelector(".btn1")
let h1 = document.querySelector("h1")
let btn2 = document.querySelector(".btn2")

let body = document.querySelector("body")

btn1.addEventListener("click",()=>{    
    body.style.backgroundColor = "black"
    h1.style.color = "white"
})

btn2.addEventListener("click",()=>{    
    body.style.backgroundColor = "white"
    h1.style.color = "black"
})