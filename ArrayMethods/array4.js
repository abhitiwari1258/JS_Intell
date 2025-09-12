// Spread Operator
// spread operator (...) allows you to expand (spread out) elements of an array, object, or string into individual elements.
// it copies the elements of an array into a new array.

let arr = [1,2,3,4,5];
let copy = [...arr];
console.log(arr);
console.log(copy);

let merge = [...arr,...copy];
console.log(merge);

console.log(Math.max(...arr));
console.log(Math.min(...copy));

// console.log(Math.max(arr));   NAN
// console.log(Math.min(copy));   NAN

const obj = { name: "Abhishek", age: 21 };
const copyObj = { ...obj };
console.log(copyObj); // { name: "Abhishek", age: 21 }


const user = { name: "Abhishek" };
const details = { age: 21, country: "India" };
const mergedObj = { ...user, ...details };
console.log(mergedObj); 
// { name: "Abhishek", age: 21, country: "India" }


const str = "Hi";
const chars = [...str];
console.log(chars); // ["H", "i"]


// Destructuring -> storing array element into multiple variable
// Breaking an array or object into small pieces and storing them in variables.

let num = [10,20,30,40]

// without destructure
// const a = num[0];
// const b = num[1];

// with destructure
let [x,y, ...other] = num;
console.log(`${x} ---> ${y} ---> ${other}`);


const [first, , third] = num;       // skipping value
console.log(first, third); // 10 30


const [a = 5, b = 15] = [100];      // default value
console.log(a, b); // 100 15


const users = { name: "Abhishek", age: 21 };

// Without destructuring
// const name1 = users.name;
// const age1 = users.age;

// With destructuring
const { name, age } = users;

console.log(name); // "Abhishek"
console.log(age);  // 21

// const { city = "Unknown" } = users;
// console.log(city); // "Unknown"

// Nested destructure

const person = {
  name: "Abhishek",
  address: { city: "Lucknow", country: "India" }
};

const { address: { city, country } } = person;

console.log(city, country); // Lucknow India

// change nessted object key
const {address:{city: abhishekCity,country:abhishekCountry}} = person
console.log(abhishekCity);
console.log(abhishekCountry);

// node array4.js