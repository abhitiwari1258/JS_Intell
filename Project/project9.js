let div = document.querySelector("div")
let button = document.querySelector("button")

const emojis = ["😀", "😂", "😍", "😎", "🤔", "🥳", "😢", "😡", "🤯", "👍", "👎", "💖", "🔥", "🌈", "🍕", "⚡", "🐶", "🐱", "🦄", "🚀"];

button.addEventListener("click",()=>{
    let randomEmoji = Math.floor(Math.random()*emojis.length);
    div.innerText = emojis[randomEmoji]
})