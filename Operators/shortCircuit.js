// short circuiting -> evaluate of an expression from left to right

// short circuit with && operator
const age1 = 9
const result1 = age1 > 18 && "Driving allowed"
console.log(result1)
// age = 9 result is false
// age = 90 result is "Driving allowed"

// short circuit with || operator
const age2 = 9//90
const result2 = age2 > 18 || "Driving allowed"
console.log(result2)

// age = 9 result be falsy then print "Driving allowed"
// age = 90 result is true
