//  Single thread nature of JS

/**
 * do 1 task at a time
 * Js is single threaded but sometime show Asynchronous   nature due to browser
 */

console.log("hello");
setTimeout(()=>{
    console.log("Waiting for 2 sec");
})

console.log("hello1");

