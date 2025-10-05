// https://jsonplaceholder.typicode.com/users

fetch("https://jsonplaceholder.typicode.com/users")
.then((resp)=>{     // here we use promise chaining
    console.log(resp.json());
    // return resp.json()
})
.then((result)=>{
    console.log(result);
})


// .then(resp => resp.json())

// .then(result => console.log(result))
// .catch(err => console.log(err))