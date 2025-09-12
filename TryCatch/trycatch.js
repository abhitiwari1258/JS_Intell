// Try catch -> used to handle error gracefully so ur porgram doesnt crash when something goes wrong

try{
    console.log("hello");
    console.log("hello");
    console.log(a);
    
}catch(er){
    // console.log(er);
    console.log("error in code");
}

// What is try...catch?

// It’s used for error handling.

// try → block of code that may throw an error.

// catch → block that handles the error.

// (Optional) finally → block that always runs, whether error occurs or not.

// handling run time error

try {
  console.log(myVar.toUpperCase());
} catch (err) {
  console.log("Variable not defined:", err.message);
}


// working with JSON/Api

try {
  const data = JSON.parse('{"name": "Abhishek"'); // missing }
} catch (err) {
  console.log("Invalid JSON:", err.message);
}


//

function registerUser(name) {
  if (!name) {
    throw new Error("Name is required!");
  }
  return "User registered: " + name.toUpperCase();
}

try {
  console.log(registerUser("abhishek"));
} catch (err) {
  console.log("Registration failed:", err.message);
}

// node trycatch.js