// function reusable part of code
// number function
/**
toFixed() -> format number with specific num of decimal place

Math.round() -> round to nearest whole number

Math.random()

Math.floor() -> round near integer less then or equal to

Math.ceil() -> round near integergreter then or equal to 
it

NaN -> not a number -> indicate undefined/unrepresentable numeric value
 */
let x = 7
console.log(x);

let x = 12.45623
console.log(x.toFixed(2))
/**
 12.234 => 12.23
 12.235 => 12.23
 12.236 => 12.24
 12.2 => 12.20
 */

let x = 12.235
console.log(Math.round(x))
let x = 12.5
console.log(Math.round(x))
/**
 12.234 => 12
 12.5 => 13
 12.65 => 13
 */

console.log(Math.floor(Math.random() * 10)+1)
console.log(Math.random())

let x = 12.395
console.log(Math.floor(x))
let x = 12.95
console.log(Math.floor(x))

let x = 12.395
console.log(Math.ceil(x))
let x = 12.95
console.log(Math.ceil(x))

// NaN

const result = "avf"/10
console.log(result)

// console.log(parseInt("sjeki"))

if(isNaN(result)){
    console.log("not a number")
}else{
    console.log("number")
}