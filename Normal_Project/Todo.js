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
    

    let today = new Date();
    let taskDateTime = today.toLocaleString()

    let dateAndTime = document.createElement("small")
    dateAndTime.textContent = `${taskDateTime}`
    dateAndTime.style.color = "#ff9800"
    listOfTask.appendChild(dateAndTime);

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
        if(task.children.length === 0){
            alert("No Task to Delete")
            return;
        }

        // confirm() is a built-in browser function that shows a pop-up dialog box with OK and Cancel buttons
        if(confirm("Are you sure you want to delete all tasks?")){
        task.innerHTML = ""
        }
    })