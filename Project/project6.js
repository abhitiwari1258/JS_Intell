const button = document.getElementById("toggleBtn");
const icon = button.querySelector("i");

function changeBackgroundColor(color){
    document.body.style.backgroundColor = color;
    document.body.style.color = color === "black" ? "white" : "black";
}

button.addEventListener("click",function(){
    let currentColor = document.body.style.backgroundColor
    if(currentColor == "" || currentColor == "white"){
        changeBackgroundColor("black")
        icon.classList.remove("fa-toggle-on");
        icon.classList.add("fa-toggle-off");
        // toggle.innerHTML = `<i class="fa-solid fa-toggle-off"></i>`
    }else{
        changeBackgroundColor("white")
        icon.classList.remove("fa-toggle-off");
        icon.classList.add("fa-toggle-on");
        // toggle.innerHTML =`<i class="fa-solid fa-toggle-on"></i>`
    }  
})