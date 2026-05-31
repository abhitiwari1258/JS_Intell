// null mean no value
// absence of any object value

let a = null
console.log(a)

function sum(a,b){
    if(a < 0){
        return null
    }else return a+b;
}
console.log(sum(-1,4))

// coalescing opr
let b = null
let result = b ?? "value is null"

console.log(result)

// optional chaining

let p = null
console.log(p?.name)  // code fatne s rokna k liya ? mark use krna jisa code age nhi badega or code fatega nhi balki undefine return kr dega

// null vs undefined

/**
 undefined is intentional absence of value
 null value is assigned

 typeof undefined is undefined
  typeof null is obj

comparison of null and undefined
null == undefined -> true
null === undefined -> false

12*null = 0  null become 0
12*undefined = NaN  undefined become NaN
 */

console.log(12*null)
console.log(12*undefined)

console.log(null == undefined)
console.log(null === undefined)

  console.log(typeof null)
   console.log(typeof undefined)


// similarities
// both represent absence of value, both have falsy value
console.log(new Boolean(null))
console.log(new Boolean(undefined))


console.log(BigInt(5))
console.log(BigInt(99999999999999999))

console.log(12n + 5n)
console.log(12n - 5n)
console.log(12n * 5n)
console.log(12n / 5n)
console.log(12n % 5n)

// bigInt not work in decimal