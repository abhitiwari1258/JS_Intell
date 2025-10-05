// Normal function 
function hello(){
     return "Hello"
}

let str = hello()
// console.log(str);
// console.log(typeof str);

// Promise

function ola(){
    return new Promise((resolve,reject)=>{
        resolve("ola Munda")
    })
}

let str1 = ola()
str1.then((result)=>{
    console.log(result);
})

// both same in return we new promise and then use resolve but in async using async keyword in function it return a promise and also wrap in resolve and return value

// async

// when we use async in function then it return a Promise

//If you return a value (like "ola Munda"), JavaScript automatically wraps it in a resolved Promise:
async function ola(){
    return "ola Munda"
}

let str2 = ola()
console.log(str2);
console.log(typeof str2);

str2.then(data => console.log(data));


// await keyword used to paused the execution of an async fxn untill promise resolved. it can only used inside async function