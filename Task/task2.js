let input = prompt("Enter Your Task")

let todoList = [];

while(true){
    if(input == "quit"){
        console.log("Quiting todo");
        break;
    }else if(input == "add"){
        let task = prompt("Enter ur task");
        todoList.push(task);
        console.log("task added");
    }else if(input == "list"){
        for(let i=0; i<todoList.length; i++){
            console.log(i,todoList[i]);
        }
    }else if(input == "delete"){
        let idx = prompt("Enter the idx U want to delete");
        todoList.splice(idx,1);
        console.log("task deleted succesfully");
    }else{
        alert("Enter wrong Input! Please Enter valid input like add,delete,list,quit")
    }

    input = prompt("enter the another request")
}
