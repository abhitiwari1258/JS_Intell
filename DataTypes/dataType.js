/*
String, Number, Bigint, Boolean, Object, Array, Date, Symbol
Undefined -> default value when no value provided
Null -> mean having no value
*/

let name = "abhishek"
let num = 5
let bool = true

let z = BigInt('9999999999999999')
let zz = 9999999999999999n
console.log(z,zz)

let val = undefined
console.log(val)

let val2 = null
console.log(val2)

let obj = {
    name:"ashish",
    class: 6
}

let arr = [1,2,4,6,9]

let today = new Date
console.log(today)
let date = Date.now()
console.log(date)

const a = Date()
console.log(a)