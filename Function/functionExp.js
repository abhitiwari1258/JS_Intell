// Function expression

let multiply = function(a,b){
    return a*b;
}

console.log(multiply(2,3));

// find sum of n number

let sum = function(n){
    let add = 0;
    for(let i=1; i<=n; i++){
        add += i;
    }
    return add;
}
console.log(sum(5));

// High order function -> take 1 or more function as an argument
// Returns a function as its result

function multipleGreet(n,fun){
    for(let i=0; i<n; i++){
        fun();
    }
}

let greet = function(){
    console.log("hlo");
}

multipleGreet(5,greet);

// greet() -> function calling
// greet -> function definition


// here is the best ecapmple
/*
 double = multiplier(2);
👉 Here’s what happens:

We call multiplier(2).

Inside multiplier, we are returning a function:


function(y) {
  return 2 * y;
}
So multiplier(2) gives us back a new function.

We store that function into the variable double.

Now, double is not just a number or string… it is actually a function itself.
So effectively:


let double = function(y) {
  return 2 * y;
};
✅ Why can we call double(5) then?
Because double is a function reference.
So calling double(5) → goes inside the returned function → 2 * 5 = 10.


*/

// node functionExp.js