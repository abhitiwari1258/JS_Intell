let input = document.querySelector("input")
let button = document.querySelectorAll("button")
let evaluateNew = false;


// 1st approach

button.forEach((e)=>{
    e.addEventListener("click",()=>{
        let result = e.textContent;
        
        if(result === "CE"){
            input.value = ""
            evaluateNew = false;
        }else if(result === "X"){
            input.value = input.value.slice(0,-1)
            evaluateNew = false;
        }else if(result === "="){
            try{
                input.value = eval(input.value)
                evaluateNew = true
            }catch{
                input.value = "Error"
                evaluateNew = false;
            }
        }else{
            if(evaluateNew && !isNaN(result)){
                input.value = result
            }else{
                input.value += result
            }
            evaluateNew = false
        }
        
    })
})