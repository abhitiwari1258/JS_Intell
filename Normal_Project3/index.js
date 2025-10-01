let input = document.querySelector("input")
let button = document.querySelector("button")

// show result
let showResult = document.querySelector(".showResult")
let prevGuess = document.querySelector(".prevGuess")
let remainingGuess = document.querySelector(".remainingGuess")

let div = document.querySelector("div")
let resetBtn = document.createElement("button")

// generate randomNumber 
let randomNumber = Math.floor(Math.random()*100 + 1)

let previousGuessNum = []  // storing value
let numberOfGuess = 1
button.addEventListener("click",()=>{
    let guessValue = parseInt(input.value)
    inputValidation(guessValue)
    input.value = ""
})


// validation of number
function inputValidation(guessValue){
    if(isNaN(guessValue)){
        alert("Please Enter Valid Number")
    }else if(guessValue < 1){
        alert("Please Enter Valid Number")
    }else if(guessValue > 100){
        alert("Please Enter Valid Number")
    }else{
        previousGuessNum.push(guessValue)
        if(numberOfGuess === 11){
            displayGuess(guessValue)
            displayMsg(`Game Over, Random number is ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guessValue)
            checkGuess(guessValue)
        }
    }
}

// display message
function displayMsg(msg){
    showResult.innerHTML = `<h1>${msg}</h1>`
}

// check guess
function checkGuess(guessValue){
    if(guessValue === randomNumber){
        displayMsg(`Congrats! Your Guess is correct`)
        endGame()
    }else if(guessValue < randomNumber){
        displayMsg("Too Low!")
    }else{
        displayMsg("Too High!")
    }
}

// display guess value and remaing count 
function displayGuess(guessValue){
    prevGuess.innerHTML += `${guessValue},`
    numberOfGuess++;
    remainingGuess.innerHTML = `${11-numberOfGuess}`
}

// endGame
function endGame(){
    input.setAttribute("disabled","")
    resetBtn.innerText = "Reset"
    div.appendChild(resetBtn)
}

// reset Game
resetBtn.addEventListener("click",()=>{
    let randomNumber = Math.floor(Math.random()*100 + 1)
    previousGuessNum = []
    numberOfGuess = 1
    prevGuess.innerHTML = ""
    remainingGuess.innerHTML = `${11-numberOfGuess}`
    input.removeAttribute("disabled")
    showResult.innerHTML = ""
    resetBtn.remove()
})