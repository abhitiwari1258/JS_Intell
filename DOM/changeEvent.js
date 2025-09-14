let form = document.querySelector("form")

form.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("clicked");
    
})

let input = document.querySelector("input")

// input.addEventListener("change",function(){
//     console.log(input.value);
//     console.log("event change occur");
// })

input.addEventListener("input",function(){
    console.log(input.value);
    console.log("event change occur");
})