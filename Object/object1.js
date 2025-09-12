let student = {
    name: "hello",
    age: 23,
    city: "varansi",
    address:{           // obj inside obj
        district : "Bhadohi",
        village: "shivjatpur",
        pinCode: 221303
    },
    number:[1,2,3,4,5],   // arr inside obj

    greet: function(){   // fxn inside object
        console.log("function");
    },
}

console.log(student);
console.log(student.address);
student.greet();
console.log(student["age"]);


// Deleting in object

delete student.city
delete student.address.pinCode
console.log(student);

// array of object

const classInfo = [
    {
        name: "moe",
        age: 22
    },
    {
        name: "moe",
        age: 22
    },
    {
        name: "moe",
        age: 22
    }
]

console.log(classInfo);
console.log(classInfo[1]);

// Math object

console.log(Math.PI);
console.log(Math.abs(-2.3334));
console.log(Math.pow(25,2));

console.log(Math.floor(9.8)); // 9
// nearest rounded value
console.log(Math.floor(9.1));  // 9

// nearest largest value
console.log(Math.ceil(9.1));  // 10
console.log(Math.ceil(9.9));  // 10
console.log(Math.ceil(-9.9));  // 10

console.log(Math.random());
console.log(Math.random()*10);

console.log(Math.floor(Math.random()*10));
console.log(Math.floor((Math.random()*100)+1));

// number bw 25 - 30
console.log(Math.floor((Math.random()*5)+25));

//  node object1.js