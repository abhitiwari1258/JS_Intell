// const cannot te-assigned
// const variable cannot be used before they are declared
// const must be assigned during declaration
// const arr and obj cannot be re-assigned but its value can change
// const have blocked scope

// const x = 20
// x = 21
// console.log(x)

// const y;   // error -> initialize and declare both once
// y = 20
// console.log(y)

const arrString = ["name","sahile","dinesh","mahesh"]
console.log(arrString)
arrString.push("190")
console.log(arrString)

// arrString = ['1','2','3'] // give error
// console.log(arrString)

const obj = {
    name:"sonu",
    age: 24
}
console.log(obj)
obj.city = "Delhi"
console.log(obj)

// obj = { address:'90, block A'} // give error

// console.log(obj)