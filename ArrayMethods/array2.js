// Nested Array -> array inside array

let num = [[1,2,3],['a','b','c'],[1.78,9.0,1.1]]

console.table(num);
console.table(num[1]);

// for of loop

let num1 = [1,2,3,4,5,6];
for(let el of num1){
    console.log(el);
}

for(let i of "abhishek"){
    console.log(i);
}

// for of in nested loop
for(let n of num){
    console.log(n);
    for(let number of n){
        console.log(number);
    }
}

//WAP to get last n element of array

let arr = [1,2,3,4,5,6];
let n = 3;
let ans = arr.slice(arr.length-n)
console.log(ans);

// WAP to check string is empty or not
// trim() removes whitespace from both ends.
let st = " ";
if(st.trim() == ""){
    console.log("string s empty");   
}else{
    console.log("not empty");
    
}

// WAP to chek character or string present at giveb index is in lowerCase or not

let st1 = "inTeLLiPaat";
let idex = 4;
if(st1[idex] == st1[idex].toUpperCase()){
    console.log("uppercase");
}else{
    console.log("lowercase");
    
}
// node array2.js