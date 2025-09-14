let para = document.querySelector("p")

let inc = document.querySelector(".inc")
let dec = document.querySelector(".dec")
let reset = document.querySelector(".reset")

let fontSize = 20;

inc.addEventListener("click",()=>{
    fontSize += 2;
    para.style.fontSize = `${fontSize}px`;
})

dec.addEventListener("click",()=>{
    fontSize -= 2;
    para.style.fontSize = `${fontSize}px`;
})

reset.addEventListener("click",()=>{
    fontSize = 20;
    para.style.fontSize = `${fontSize}px`;
})