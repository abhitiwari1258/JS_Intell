// DOM (Document Object Model)

// getElementById -> used to select an HTML element by its unique id attribute.

let title = document.getElementById("title")
title.innerText = "hey EveryOne"


// getElementsByClassName -> It’s a DOM method used to select all elements with a given class name.

let lst = document.getElementsByClassName("list")
let num = lst[1].innerHTML = 69
console.log(num);

// getElementsByTagName -> It’s a DOM method that selects all elements with a given HTML tag name.

let tg = document.getElementsByTagName("h1")
tg[1].innerHTML = "DOM PAPA"
console.log(tg[1]);

// QuerySelector

// document.querySelector("tagName")
// document.querySelector("#idName")
// document.querySelector(".className");

// to select more then 1 element of same tagName className and idName we use [document.querySelectorAll]

let one = document.querySelector("#title")
console.log(one.innerText);

let two = document.querySelectorAll(".list");
console.log(two[2].innerText);

let three = document.querySelector("p");
console.log(three.innerText);

// using Properties and method
/**
 *  innerText -> shows visible text contained in a node 
 
 * textContent -> shows visible (or include hidden element) text contained in a node [it give only text, we manipulate text or add text]

* innerHTML -> shows the full markup [mean <h1>hello</h1>]
 */

let lorem = document.querySelector(".lorem")
console.log(lorem.innerText);

console.log(lorem.innerHTML);

console.log(lorem.textContent);

let none = document.querySelector(".none")
console.log(none.textContent);


// Manipulating attributes

/*
* .getAttribute("attributeName") → returns the value of the specified attribute from an HTML element.

* .setAttribute("attributeName", "value") → sets/updates an attribute on an element.

* .removeAttribute("attributeName") → removes the specified attribute from an element.
*/

let name1 = document.querySelector("#link")
// here id href target are attributes
console.log(name1);
console.log(name1.id);
console.log(name1.href);
console.log(name1.target);

console.log(name1.setAttribute("id","attributes"));
console.log(name1.setAttribute("href","https://www.amazon.com/"));

console.log(name1);

console.log(name1.removeAttribute("target"));
console.log(name1);

// Manipulating style

let btn = document.querySelector("button")
console.log(btn.style);
btn.style.color = "red"
btn.style.backgroundColor = "yellow"
btn.style.border = "none"
btn.style.fontSize = "20px"

