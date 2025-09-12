// Trim method -> remove white spaces but not remove space between 2 string

let str = "   HeLLo JS  ";
console.log(str.trim());
console.log(str);

// toUpperCase -> give Capital letter of string

console.log(str.toUpperCase());

// toLowerCase -> give small letter string

console.log(str.toLowerCase());


// String methode with some arguments
// indexOf -> give the first index of the occurencee of some value in string

let str1 = "hello Every One"
console.log(str1.indexOf("One"))
console.log(str1.indexOf("Every"));
console.log(str1.indexOf("y"));


// Methode Chaining -> using 1 method after another

let str3 = "  hello abhishek   "
console.log(str3.toLocaleUpperCase().trim());

// string are immutable(not change)
// copy first and then do changes
// no change happen in original string variable it copy to another and then changes happend

// Eg
console.log(str3);
let newstr3 = str3.trim();
console.log(newstr3);

// Slice -> return a part of original string as a new string

let str4 = "helloEveryOne"
console.log(str4.slice(2,6));
console.log(str4.slice(-3));  // One -> from backside
console.log(str4.slice(2));   // lloEveryOne -> age s


console.log(str4.slice(1,-3)); // elloEvery -> age s 1 piche s 3

console.log(str4.slice(5,13)); // EveryOne

console.log(str4.slice(0,2));  // he

console.log(str4.slice(0,-8));  // hello

console.log(str4.slice(-5,-2)); // ryO
// start from backward -5 -> ryOne then 
// -2 from backside -> ne => ryOne - ne => ryO

console.log(str4.slice(-13));  // helloEveryOne

console.log(str4.slice(13,4))  // " "

// replace -> search value in string and return new string with value replace

let str5 = "mangoBanana";
console.log(str5.replace("Banana","mango"));

// repeat -> rpt the given string multiple time

console.log(str5.repeat(5));

console.log(str5.length);




