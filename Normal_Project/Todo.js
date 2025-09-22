let input = document.querySelector("input")
let btn = document.querySelector("button")
let task = document.querySelector(".task")
const delAll = document.querySelector(".delAll")

btn.addEventListener("click",(event)=>{
    event.preventDefault()

    let todoValue = input.value.trim()   // ignore empty task
    if (todoValue === "") return; 

    // creating list item in ul
    let listOfTask = document.createElement("li")
    listOfTask.style.listStyleType = "none";
    task.appendChild(listOfTask)
    input.value = " "

     // create checkbox
    let checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    listOfTask.appendChild(checkBox)


    let taskText = document.createElement("span")
    taskText.textContent = todoValue
    listOfTask.appendChild(taskText)

    // creating remove list button
    let listOfButton = document.createElement("button")
    listOfTask.appendChild(listOfButton)
    listOfButton.textContent = "X"

    // delete btn functionality remove item 1 by 1
    listOfButton.addEventListener("click",()=>{
        listOfTask.remove();
    })

    checkBox.addEventListener("click",()=>{
        if(checkBox.checked){
            taskText.style.textDecoration = "line-through"
            taskText.style.color = "green"
        }else{
             taskText.style.textDecoration  = "none"
             taskText.style.color = "red"
        }
    })

})

 // delete all list item at one click
    delAll.addEventListener("click",()=>{
        // task.remove()
        task.innerHTML = ""
    })