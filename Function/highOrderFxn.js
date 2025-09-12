
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

function factoryOfOddEven(rqst){
    if(rqst == "odd"){
        return function(number){
            console.log(number % 2 != 0);
        }
    }else if(rqst == "even"){
        return function(number){
            console.log(number % 2 == 0);
            
        }
    }else{
        console.log("Sorry we dont have fxn rqst");
        
    }
}

let factory = factoryOfOddEven("even");
factory(8);

// create a higher order function that return function for sum and multiply

function sumMulti(rqst){
    if(rqst == "sum"){
        return function(number){
            return number*(number+1)/2;
        }
    }else if(rqst == "multi"){
        return function(number){
            return number * number;
        }
    }else{
        console.log("not exist in function");
        
    }
}

let sumu = sumMulti("multi")
console.log(sumu(5));

function double(x){
    return x*2;
}

function applyTwice(fxn,n){
    return fxn(fxn(n));
}

console.log(applyTwice(double, 5));


function operator(a,b,fxn){
    return fxn(a,b);
}
console.log(operate(5, 3, (a, b) => a + b)); // 8





//  node highOrderFxn.js


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