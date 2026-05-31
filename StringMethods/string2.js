// string comparison
// compare based on lexical order
// lexical order based on alphabet or dictionary order

console.log('a' === 'b')
console.log('a' == 'a')

console.log('a' === 'A')
console.log('a' == 'A')

console.log('5' === 5)
console.log('5' == 5)

// split => mean breaking into parts

let str = "my name is homelander"
let splitStr = str.split(" ")
console.log(splitStr)

let myTxt = "ashish,abhishek,ram,shyam"
console.log(myTxt.split(","))
console.log(myTxt.split(",",1))
console.log(myTxt.split(",",3))

// join -> it join the element of an array into single string
// use seperator to join the array

let arr = ['r','d','e','s']

console.log(arr.join(" "))
console.log(arr.join(","))
console.log(arr.join("-"))
console.log(arr.join("->"))

