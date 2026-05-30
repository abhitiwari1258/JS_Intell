//  = , +=, -=, *=, /=, %=, **=
// logical AND assignment && 
// logical OR assignment ||
// Nullish coalescing assignment
// we ?? operstor return right hand if left is null/undefined

// let a = 5
// a += 5
// console.log(a)

// let b = 10
// b -= 5
// console.log(b)

// let a = 5
// a *= 5
// console.log(a)

// let b = 10
// b /= 5
// console.log(b)

// let b = 11
// b %= 5
// console.log(b)

// exponential

// let a = 2
// a **= 2
// console.log(a)

// let x = 5
// let y = 6

// x = x && y
// x &&= y
// console.log(x)

// x = x||y
// x ||=y
// console.log(x)

let showName = "Homelander"
let realName = "Antony starr"

let nameToUse = null

// if(showName != null){
//     nameToUse = showName
// }else{
//     nameToUse = realName
// }

nameToUse = showName ?? realName
console.log(nameToUse)

let x = null
let y = 6

// x = x ?? y
x ??= y
console.log(x)