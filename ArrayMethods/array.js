let arr = ["abhishek","sachin","yash","Shiv"];

// push method -> add to end

arr.push("amisha");
arr.push("prashant");
console.table(arr);

// pop -> remove from end

arr.pop()
console.log(arr);

// unshift -> added to start position

arr.unshift("anish");
console.log(arr);

// shift -> remove from start

arr.shift();
console.table(arr);

let month = ["jan","july","march","aug"];
month.shift("jan");
month.shift("july");
month.unshift("june");
month.unshift("july")

console.table(month);

// indexOf

console.log(month.indexOf("aug"));

// include -> it check value present or not

console.log(month.includes("june"));
console.log(month.includes("jan"));

// concat -> used to merge two array

let merge = month.concat(arr);
console.log(merge);

// reverse -> reverse array

console.log(month.reverse());

// slice

let sign = ["Alpha","beta","gama","aeta","sigma","theta"]
console.log(sign.slice(4,1)) // empty []
console.log(sign.slice(1,3));  // beta,gama
console.log(sign.slice(0,3));  //  alpha beta game
console.log(sign.slice(3));   //  aeta sigma theta  // starts from index 3 till end
// So it starts from "aeta" till end.
console.log(sign.slice(-3));   // 'aeta', 'sigma', 'theta'  
console.log(sign.slice(1,-3));  // beta,gama
console.log(sign.slice(-1,-3));  // nothing
console.log(sign.slice(-4,-1)); // gama,aeta,sigma

console.log(sign)

// splice -> all in One (start,delete,add)

let color = ["red","green","blue","yellow","purple","orange","brown"];  // modify original array

console.log(color.splice(2));
console.log(color.splice(2,1,"black"));
console.log(color.splice(2,4,"gold"));
console.log(color);

// sort
console.log(color.sort());

let months = ["jan","july","march","aug"];
console.log(months.splice(0,2,"july","june"));
console.log(months);



// Q practice
let arr = ["a","b","c","d","e"];

console.log(arr.slice(1,4)); // bcd
console.log(arr);

let arr = [10,20,30,40,50];

console.log(arr.slice(-3)); // 30 40 50
console.log(arr.slice(0,-2)); // 10 20 30

let arr = ["red","blue","green","black"];

console.log(arr.slice(-3,-1)); // blue green

let arr = [1,2,3,4,5];

console.log(arr.slice(3,1)); // empty

let arr = ["html","css","js","react"];

console.log(arr.splice(1,2)); // css,js
console.log(arr); // html react

let arr = [1,2,3,4,5];

console.log(arr.splice(2,1,100)); // 3
console.log(arr); //  1,2,100,4,5

let arr = ["a","b","c","d"];

console.log(arr.splice(1,0,"x")); // []
console.log(arr); // a,x,b,c,d


let arr = [10,20,30,40,50];

console.log(arr.splice(-2,1)); // 40
console.log(arr); // 10,20,30,50

let arr = ["apple","banana","mango","orange"];

console.log(arr.splice(1,2,"grapes","kiwi")); // banana,mango
console.log(arr); // aple,grapes,kiwi,orang

let arr = [1,2,3];

console.log(arr.splice(5,1,"a")); // []
console.log(arr); //123a

//  node array.js