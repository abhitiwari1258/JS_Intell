let input = document.querySelector("input");
let btn = document.querySelector(".fa-eye")

btn.addEventListener("click",function(){
    console.log(input.type);

    if(input.type === "password"){
        input.type = "text"
        btn.classList.remove("fa-eye")
        btn.classList.add("fa-eye-slash")
    }else{
        input.type = "password"
        btn.classList.remove("fa-eye-slash")
        btn.classList.add("fa-eye")
    }
    
})


// let input = document.querySelector("input");
// let btn = document.querySelector("#toggleBtn")

// btn.addEventListener("click",function(){
//     console.log(input.type);

//     if(input.type === "password"){
//         input.type = "text"
//         btn.textContent = "Hide"
//     }else{
//         input.type = "password"
//         btn.textContent = "Show"
//     }
    
// })