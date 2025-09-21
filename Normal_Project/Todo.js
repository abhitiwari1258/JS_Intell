let input = document.querySelector("input")
let btn = document.querySelector("button")
let task = document.querySelector(".task")
const delAll = document.querySelector(".delAll")

btn.addEventListener("click",(event)=>{
    event.preventDefault()

    // creating list item in ul
    let listOfTask = document.createElement("li")
    task.appendChild(listOfTask)
    listOfTask.textContent = input.value
    input.value = " "

    // creating remove list button
    let listOfButton = document.createElement("button")
    listOfTask.appendChild(listOfButton)
    listOfButton.textContent = "X"

    // delete btn functionality remove item 1 by 1
    listOfButton.addEventListener("click",()=>{
        listOfTask.remove();
    })

    // delete all list item at onc click
    delAll.addEventListener("click",()=>{
        task.remove()
    })

})