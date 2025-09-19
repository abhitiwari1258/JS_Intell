// Promise -> A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

//I don’t have the result right now, but I’ll give it to you later — either success or failure.”

/**
  States of a Promise:

 * Pending → Initial state, neither fulfilled nor rejected.

 * Fulfilled → The operation completed successfully.

 * Rejected → The operation failed.
 */

  /**
    Promise Method
    * then() and catch()
    if promise fullfilled then we use then() method if rejected then use catch() method
   */

  function saveDate(data){
    return new Promise((resolve, reject) => {
        let netSpeed = Math.floor(Math.random()*10)+1
        console.log(netSpeed);
        
        if(netSpeed > 4){
          resolve("Data : Saved")
        }else{
          reject("Data : no File saved")
        }
    })
  }

  // better style = Promise chaining

  saveDate("abhishek")
  .then(() => {
    console.log("Data 1 saved");
    return saveDate("mj");
  })
  .then(() => {
    console.log("Data 2 saved");
    return saveDate("mj2");
  })
  .then(() => {
    console.log("Data 3 saved");
  })
  .catch(() => {
    console.log("❌ One of them failed");
  });







  // saveDate("abhishek")
  // .then(() => {
  //   console.log("Promise Fulfilled");
  //   console.log("Data 1 saved");

  //   saveDate("mj")
  //     .then(() => {
  //       console.log("Data 2 saved");

  //       saveDate("mj2")
  //         .then(() => {
  //           console.log("Data 3 Saved");
  //         })
  //         .catch(() => {
  //           console.log("Data 3 rejected");
  //         });

  //     })
  //     .catch(() => {
  //       console.log("Data 2 rejected");
  //     });

  // })
  // .catch(() => {
  //   console.log("Data 1 rejected");
  // });


  // let request = saveDate("abhishek")

  // request
  // .then(
  //   ()=>{
  //     console.log("FullFilled");
  //     // console.log(request);

  //     let request2 = saveDate("sachin")
  //     request2.then(()=>{
  //       console.log("Data 2 Fullfilled");

  //       let request3 = saveDate("Yash")
  //       request3.then(()=>{
  //         console.log("Data 3 Fullfilled");
  //       }).catch(()=>{
  //         console.log("Data 3 rejected");
  //       })

  //     }).catch(()=>{
  //       console.log("Data 2 rejected");
  //     })

  //   })
  // .catch(
  //   ()=>{
  //     console.log("Failed");
  //     console.log(request);
  //   }
  // )

  
  










  // let myPromise = new Promise((resolve,reject)=>{
  //   let success = true

  //   if(success){
  //       resolve("Success")
  //       console.log(`success`);
        
  //   }else{
  //       reject("Failure")
  //       console.log("fail");
        
  //   }
  // })