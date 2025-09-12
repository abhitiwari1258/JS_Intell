// Adding element in js

// document.createElement('p')

// appendChild(elmName) -> Adds an element as the last child of a parent. Only works with nodes

// append(elm) -> Can append multiple nodes or strings at once.
// prepend(elm) -> Inserts an element as the first child of a parent.
// insertAdjacent(where,elm) -> Inserts an element relative to an existing element, not just as first/last child.


// appendChild

let para = document.createElement("p");
console.log(para);
para.innerText = "Hello everryOne this is DOM"

let div = document.querySelector("div")
console.log(div);

div.appendChild(para)

let btn = document.createElement("button")
btn.innerText = "Click To Login"
console.log(btn);

div.appendChild(btn)

btn.style.color = "green"
btn.style.backgroundColor = "yellow"

// append(elm)
let span = document.createElement("span")
console.log(span);
span.textContent = "First child to append"

div.append(span)

// prepend(elm)
let header = document.createElement("header");
console.log(header);
header.textContent = "I come first"

div.prepend(header)

// insertAdjacent(where, elm)
/**
 "beforebegin" → before element itself
"afterbegin" → inside element, before first child
"beforeend" → inside element, after last child
"afterend" → after element itself
 */
let p1 = document.createElement("p")
p1.textContent = "inserted next to div"

div.insertAdjacentElement("afterend",p1)
// div.insertAdjacentElement("afterbegin",p1)
// div.insertAdjacentElement("beforeend",p1)
// div.insertAdjacentElement("beforebegin",p1)


// Remove Element
/**
 *  .removeChild(elm)
 *  .remove()
 */

// .removeChild(elm)
let img = document.querySelector("img")
console.log(img);

let body = document.querySelector("body")
console.log(body);
body.removeChild(img)


// .remove()
span.remove()




