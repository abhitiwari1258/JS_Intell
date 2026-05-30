console.log(Infinity)
console.log(-Infinity)

console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)

console.log(10/0)

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)

console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

// Number formats

const number = 12.123
let formatter = new Intl.NumberFormat('en-In',{
    style:"currency", 
    currency: 'INR'
})

formatter = new Intl.NumberFormat('en-US',{
    style:"currency", 
    currency: 'USD'
})

console.log(formatter.format(number))