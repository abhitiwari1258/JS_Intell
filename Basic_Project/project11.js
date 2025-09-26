const form = document.querySelector("form")

let button = document.querySelector("button")
let result = document.querySelector(".result")



form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let height = parseInt(document.querySelector(".height").value)
    let weight = parseInt(document.querySelector(".weight").value)

    if(height === "" || height <= 0 || isNaN(height)|| weight === "" || weight <= 0 || isNaN(weight)){
        alert("Please Enter valid height and weight")
    }

    const heightInMeter = height / 100
    let bmi = (weight / (heightInMeter * heightInMeter)).toFixed(2) // .toFixed(2) is used to round a number to 2 decimal places

    let categoryOfBody = ""
    if(bmi < 18.5){
        categoryOfBody = "UnderWeight";
    }else if(bmi >= 18.5 && bmi < 24.9){
        categoryOfBody = "Normal Weight"
    }else if(bmi > 24.9 && bmi < 29.9){
        categoryOfBody = "OverWeight"
    }else{
        categoryOfBody = "Obese";
    }

    result.textContent = `Your BMI is ${bmi} and Body Category is ${categoryOfBody}`

})