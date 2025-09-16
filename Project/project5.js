let body = document.querySelector("body")
let h1 = document.querySelector("h1")
let toggle = document.querySelector("button")

toggle.addEventListener("click",function(){
    darkLight()
})
function darkLight(){
    document.body.classList.toggle("dark")
    h1.classList.toggle("light")
}


// basic Approach -> create 2 button

// let btn1 = document.querySelector(".btn1")
// let btn2 = document.querySelector(".btn2")

// btn1.addEventListener("click",()=>{    
//     body.style.backgroundColor = "black"
//     h1.style.color = "white"
// })

// btn2.addEventListener("click",()=>{    
//     body.style.backgroundColor = "white"
//     h1.style.color = "black"
// })