function fetchUser(){
fetch("https://jsonplaceholder.typicode.com/users")
.then(resp => resp.json())
.then(result => console.log(result))
.catch(err => console.log(err))
}
// fetchUser()

// Here, we use .then() because fetch() returns a Promise.
// Each .then() waits for the previous one to finish.

// When this Promise finishes, then do that, then do this…

async function getUser(){
    let responce = await fetch("https://jsonplaceholder.typicode.com/users")    
    console.log(responce);
    
    let json = await responce.json()
    console.log(json);
}

getUser()

// Here, we use await to pause the function until the Promise resolves.
// So instead of chaining .then(), we write code in a step-by-step, synchronous-looking way.

// “Wait for this Promise to finish, then move to the next line.



// to get error also use try catch

async function getUser(){
    try{
        let responce = await fetch("https://jsonplaceholder.typicode.com/users")    
        console.log(responce);
        
        let json = await responce.json()
        console.log(json);
    }catch(err){
        console.log(err);
        
    }
}

getUser()