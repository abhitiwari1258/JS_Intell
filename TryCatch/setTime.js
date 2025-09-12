// callBack -> function passed as argument to another function or high order function

// most of the time we use arrow fxn as a callback


// setTimeout -> delay execution of function by given time
console.log("hlo");
setTimeout(()=>{
    console.log("hlo");
},1000)

console.log("hlo");

// setInterval -> used to repeat execution of function at given time interval

// set interval always return id -> triggerId
let id = setInterval(()=>{
    console.log("Js");
    clearInterval(id) // to stop its execution we use clearInterval
},1000)

// console.log(id);
// clearInterval(id) 
// due to passing id we stop execution of setInterval


// WAP to print hello for 5 time at the interval of 3 sec

let newId = setInterval(()=>{
    let count = 0;
    for(let i=0; i<5; i++){
        console.log("hello");
    }
    console.log("-----------------");
},3000);

setTimeout(()=>{
    clearInterval(newId);
},15100);

// node setTime.js