// asyncAwait -> a simpler way to work with Promises.
// Instead of using .then() / .catch(), you can write code that looks synchronous but still works asynchronously.

/**
 Rules

 * A function marked with async always returns a Promise.

 * Inside an async function, you can use await in front of a Promise.

 * await pauses execution until the Promise settles (fulfilled or  rejected).

If fulfilled → you get the resolved value.

If rejected → it throws an error (like an exception).
 */

async function greet(){         // this fxn return 1 promise
    return "hello"
}

async function greet(){ 
    Abc.abc()       // error
    return "hello"
}

// error using throw keyword

async function greet(){ 
    throw "some error"       // error
    return "hello"
}

// uing then() catch()

greet().then((err)=>{
    console.log(err);
    console.log("resolved Promise");
})
.catch((err)=>{
    console.log(err);
    console.log("rejected Promise");
})

let greeting = async (er)=>{
    console.log(er);
    return "bye"
}


function randomNumber(){
    return new Promise((resolve,reject)=>{
        let num = Math.floor(Math.random()*10)+1;
        console.log(num);
    })
}

async function demo(){
    randomNumber();
}

/** OUTPUT

* ->randomNumber()
 1
Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined

-------------*****************---------------

demo()
 7
Promise {<fulfilled>: undefined}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: undefined
 */

function randomNumbers(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve()
        },2000)
    })
}

// await -> it stop all a
async function demo(){
    // await randomNumbers();
    // await randomNumbers();
    randomNumbers();
    randomNumbers();
    await randomNumbers();
}

/**
 *You must call either:

resolve(value) → ✅ promise becomes fulfilled with value.

reject(error) → ❌ promise becomes rejected with error.
 */