// promise is an object represnting the eventual completion or failure of an asynchronous operation

// pending fillfilled rejected

function getDataUsingPromise(){
    let promise = new Promise((resolve,reject)=>{
        console.log("Getting data from Internet using Promise");

        // for(let i=0; i<100; i++) console.log(i);

        // resolve("abhishek")
        reject("error")
    })
    return promise;
}

getDataUsingPromise()
.then((data)=>{
    console.log(`Data is Fetched ${data}`);
})
.catch((err)=>{
    console.log(`Error ${err}`);
})
.finally(()=>{
    console.log("Finally Block");
    
})



//promiseAll

// const promise1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise1")
//     },1000)
// })

// const promise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise2")
//     },2000)
// })

// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Promise3")
//     },3000)
// })

// Promise.all([promise1,promise2,promise3]).then((res)=>{
//     console.log("Success");
//     console.log(res);
// }).catch((err)=>{
//     console.log("Failure");
//     console.log(err);
// })