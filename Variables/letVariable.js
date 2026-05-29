// var : 
// * it can be re-declare and re-assign.
// * global scope

// let variable declare once in single scope
// let have blocked scope
// variable with same name can exist in diff scope, local scope wins

let x = 10
if(x == 11){
    let y = 1;
    // let y = 2;  // error 
    console.log(y)
    console.log("x is 11")
}else{
    let y = 2;
    console.log(y)
    console.log("x is 10")
}
console.log(y)  // declare ouside scope