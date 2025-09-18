/**
 * A callback is a function passed into another function to run later (after a task completes).
 
 * too many nested callbacks, it becomes messy, hard to read, and hard to maintain.
 */
let h1 = document.querySelector("h1")

function changeColor(color,delayTime,checkNextColorChange){
    setTimeout(()=>{
        h1.style.color = color

        if(checkNextColorChange){
        // Or remove if 
            checkNextColorChange();
        }
    },delayTime)
}

// this is Callback Hell.

changeColor("red",1000,()=>{
    changeColor("green",1500,()=>{
        changeColor("blue",2000,()=>{
            changeColor("orange",2500)
        })
    })
})