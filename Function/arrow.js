// Arrow function

const sum = (a,b)=>{
    return a+b;
}
console.log(sum(2,4));

const pow = (a,b)=>{
    return a**b;
}
console.log(pow(2,4));

let check = (n)=>{
    if(n % 2 == 0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
check(5)
check(6);

let cube = n => console.log(n*n*n);

cube(3)

let avg = (a,b,c) =>{
    return (a+b+c)/3;
}
console.log(avg(2,3,4));

let arr = [2,3,4,5,6];
let avrg = (arr)=>{
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}
console.log(avrg(arr));

//  node arrow.js