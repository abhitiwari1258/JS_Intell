// parseInt() -> parse string and convert into a integer
// parseFloat() -> parse string and convert into a float

let x = '1234'
console.log(typeof x)
console.log(parseInt(x))
console.log(typeof parseInt(x))
/**
 parseInt("234") 234
 parseInt("2 3 4") 2
 parseInt("2.34") 2
 */

const x = "abC"
const y = parseInt(x)
console.log(y)  // NaN


let x = '123.90'
console.log(typeof x)
console.log(parseFloat(x))
console.log(typeof parseFloat(x))

/**
 parseFloat("2.34") 2.34
 parseFloat("2.3 4") 2.3
 parseFloat("2av2.34") 2
 parseFloat("A.3") NaN
 */