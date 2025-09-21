// 3rd Approach using toggle

// let body = document.querySelector("body")
let h1 = document.querySelector("h1")
let toggle = document.querySelector("button")

function changeBackgroundColor(color){
    document.body.style.backgroundColor = color;
}

function textColor(color){
    h1.style.color = color;
}

toggle.addEventListener("click",function(){
    console.log(document.body.style.backgroundColor);
    let currentColor = document.body.style.backgroundColor
    if(currentColor == "" || currentColor == "white"){
        changeBackgroundColor("black")
        toggle.innerText = "dark Mode"
        textColor("white")
    }else{
        changeBackgroundColor("white")
        toggle.innerText = "light Mode"
        textColor("black")
    }  
})


// 2nd Approach using toggle
// toggle.addEventListener("click",function(){
//     darkLight()
// })
// function darkLight(){
//     document.body.classList.toggle("dark")
//     h1.classList.toggle("light")
// }


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