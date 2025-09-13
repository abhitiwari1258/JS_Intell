let btn = document.querySelector("button")
let div = document.querySelector("div")
let h2 = document.querySelector("h2");


btn.addEventListener("click",()=>{
    // console.log("button clicked")
    // console.log(randomColor());
    let randomColorVar = randomColor();
    div.style.backgroundColor = randomColorVar;
    h2.textContent = randomColorVar;
    
})

function randomColor(){
    let red = Math.floor(Math.random()*255);    
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red},${green},${blue})`
    return color;
}
