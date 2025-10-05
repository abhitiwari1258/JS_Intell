function getDataFromInternet(succesCallback){
    console.log("Getting date from internet");
    setTimeout(()=>{
        console.log("Got data from internet");
        succesCallback("Abhishek")
    },3000)
}

function sendDataaToDB(succesCallback){
    console.log("Sending data to DB");
    setTimeout(()=>{
        succesCallback()
    },2000)
}

function sendResponceToUser(succesCallback){
    console.log("Sending data to User");
    setTimeout(()=>{
        succesCallback("DB_iD_90091")
    },5000)
    
}

// CallBack Hell

// multiple asynchronous operation need to be performed in sequence, callbacks can lead to deeply nested and hard to read code reffered as, callBack Hell

getDataFromInternet((data)=>{  // here we pass callback
    console.log(`Data is Fetched ${data}`);
    sendDataaToDB((id)=>{
        console.log(`Data saved in DB with ID ${id}`);
        sendResponceToUser(()=>{
            console.log("Responce sent to user done");
        })
    })
})