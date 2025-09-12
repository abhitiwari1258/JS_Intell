// Array and object Method

// for Each
// array.forEach(function(element, index, array) {
//   // logic here
// });

let arr = [1,2,3,4,5];

arr.forEach((el,i)=>{
    console.log(i,el+2);
})

let arr1 = [
    {
        name:"nrne"
    },
    {
        name:"kol3nf"
    }
]

arr1.forEach((el)=>{
    console.log(el);
    console.log(el.name);
})

// Map -> create a new array by applying a fxn to each elm of an existing elm

let el = arr.map((item,idx)=>{
    console.log(item,idx);
    return item*2;
})
console.log(el);

// filter -> it check every item apply condition

let elm = arr.filter((val,idx)=>{
    return val % 2 == 0;
})
console.log(elm);

// every -> it check for all elm meet condition then return (T) else return (F)

let newA = [2,4,6,8];
let array = newA.every((el)=>{
    return el % 2 == 0;
})
console.log(array);

// some -> if 1 elm meet conditin then return (T) else (F)

let array2 = newA.some((el)=>{
    return el % 2 != 0;
})
console.log(array2);

// reduce -> combine all elm of array and make it into single vlaue

let array3 = newA.reduce((total,item,idx)=>{
    return total+=item;
})
console.log(array3);
