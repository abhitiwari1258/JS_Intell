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
console.log(sign.slice(1,3));  // beta,gama
console.log(sign.slice(0,3));  //  alpha beta game
console.log(sign.slice(3));   //  aeta sigma theta
console.log(sign.slice(-3));   // alpha beta gama
console.log(sign.slice(1,-3));  // beta,gama
console.log(sign.slice(-1,-3));  // nothing
console.log(sign.slice(-4,-1)); // gama,aeta,sigma

console.log(sign)

// splice -> all in One (start,delete,add)

let color = ["red","green","blue","yellow","purple","orange","brown"];

// console.log(color.splice(2));
// console.log(color.splice(2,1,"black"));
// console.log(color.splice(2,4,"gold"));
// console.log(color);

// sort
console.log(color.sort());

let months = ["jan","july","march","aug"];
console.log(months.splice(0,2,"july","june"));
console.log(months);



//  node array.js