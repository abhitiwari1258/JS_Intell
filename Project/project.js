let btn = document.querySelector("button")
let div = document.querySelector("div")
let h2 = document.querySelector("h2");


btn.addEventListener("click",()=>{
    console.log("button clicked")
    console.log(randomColor());
    div.style.backgroundColor = randomColor();
    h2.textContent = randomColor();
    
})

function randomColor(){
    let red = Math.floor(Math.random()*255);    
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red},${green},${blue})`
    return color;
}
