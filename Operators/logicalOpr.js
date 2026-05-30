let dish1 = "rajma"
let dish2 = "chawal"

// && both condition true
if(dish1 == "rajma" && dish2 == "chawal"){ 
    console.log("I will eat food today")
}else{
    console.log("not Eat")
}

// || one condition should be true
if(dish1 == "rajma" || dish2 == "roti"){ 
    console.log("I will eat food today")
}else{
    console.log("not Eat")
}

// ! logical not
let isTrue = true

if(!isTrue){
    console.log("not drink milk")
}else{
    console.log("drink milk")
}