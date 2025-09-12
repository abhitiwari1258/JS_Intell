// Types of Scope in JS
// 1. Global Scope

// A variable declared outside of any function or block has global scope.

// It can be accessed anywhere in the program.

let globalVar = "I am global";

function test() {
  console.log(globalVar); // Accessible here
}

console.log(globalVar);   // Accessible here too


// 2. Function Scope (Local Scope)

// Variables declared inside a function are only accessible within that function.

function greet() {
  let name = "Abhishek";  // local scope
  console.log("Hello " + name);
}

greet();
console.log(name); // ❌ Error: name is not defined


// 3. Block Scope (ES6: let and const)

// Variables declared with let or const inside {} are block-scoped.

// They cannot be accessed outside that block.

{
  let x = 10;
  const y = 20;
  console.log(x, y); // ✅ Works inside block
}
console.log(x); // ❌ Error
console.log(y); // ❌ Error

// But var is NOT block scoped (it is function-scoped instead).

{
  var z = 30;
}
console.log(z); // ✅ Works (var ignores block scope)


// 4. Lexical Scope

// An inner function has access to variables of its outer function.

function outer() {
  let outerVar = "outer";

  function inner() {
    console.log(outerVar); // ✅ Can access outerVar
  }
  inner();
}

outer();