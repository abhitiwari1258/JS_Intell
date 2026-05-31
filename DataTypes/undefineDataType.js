// undefine mean something that is not clear
// variable declared but value not assign

let a;
console.log(a)

function sumWithoutReturn(x,y){
   let result = x+y;
}
console.log(sumWithoutReturn(2,3))

const obj = {
    name:"abhishek"
}

console.log(obj.name)
console.log(obj.age)

let arr = [1,2,3]
console.log(arr[2])
console.log(arr[3])

console.log(typeof undefined)

if(obj.age === undefined){
    console.log('not exist');
}else {
    console.log("exist")
}