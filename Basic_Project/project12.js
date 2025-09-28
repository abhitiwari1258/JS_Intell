let btn = document.querySelector("button")
let setup = document.querySelector(".setup")
let punchline = document.querySelector(".punchline")

function genJoke(){
    const data = fetch("https://official-joke-api.appspot.com/jokes/random")

    data.then((res)=>{
        return res.json()    
    }).then((responce)=>{
        setup.innerHTML = responce.setup
        punchline.innerHTML = responce.punchline
    })
}

btn.addEventListener("click",genJoke);