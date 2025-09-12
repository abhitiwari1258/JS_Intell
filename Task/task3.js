// write a function to merge 2 object

let obj1 = {
    A:1,
    B:2
}

let obj2 = {
    C:3,
    D:4
}

const merge = {...obj1,...obj2};
console.log(merge);


let m = (o1,o2)=> ({...o1,...o2});     // using arrow function
console.log(m(obj1,obj2));


// Square and sum of array element using arrow function also print the avg of array after square

let arr = [1,2,3,4,5];
// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     sum += arr[i] * arr[i]; 
// }
// console.log(sum);
// let avg = sum/arr.length
// console.log(avg);

// --------------------------------------
// let arrow = (arr)=>{
//     let sum = 0
//     for(let i of arr){
//         sum+= i*i;
//     }
//     console.log(sum);
//     console.log(`Avg : ${sum / arr.length}` );    
// }

// arrow(arr)

let sqr = arr.map((num)=> num*num);
console.log(sqr);

let reduced = sqr.reduce((total,el)=> total+=el)
console.log(reduced);


// node task3.js