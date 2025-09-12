// Manipulating classList
/**
 * classList.add -> Adds one or more classes
  
 * classList.remove ->  Removes one or more classes
 
 * classList.toggle -> Adds class if not present, removes if present
 
 * classList.contain -> Returns true/false if class exists

 * classList.length -> return number of class

 * classList[index] -> Access class by index
 */

let heading = document.querySelector(".heading")
console.log(heading);

heading.classList.add("list")  // adding class
heading.classList.add("list2") 

heading.classList.remove("list")  // remove class

let h1 = heading.classList.contains("list") 
console.log(h1);         // chk class exist or not
let h2 = heading.classList.contains("list2") 
console.log(h2);

let h3 = document.querySelector(".heading")
h3.classList.toggle("background")
console.log(h3);

// Navigation

/**
 * .parentElement -> give the parent element
 * childern -> childern of an element
 * previousElementSibling ->elment s phla wala siblng
 * nextElementSibling  -> kisi elm k bad wala sibling
 */

let hm = document.querySelector("h2")
console.log(hm);

console.log(hm.parentElement);

let div = document.querySelector("div")
console.log(div.parentElement);

console.log(div.children);

let body = document.querySelector("body")
console.log(body.children);

console.log(hm.previousElementSibling);

console.log(hm.nextElementSibling);



