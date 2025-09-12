function greet(greeting){
    console.log(greeting);
}

greet("Welcome")

function vote(age){
    if(age >= 18){
        console.log("u can Vote");
    }else{
        console.log("not Vote");
    }
}

vote(20)
vote(22)
vote(11);

// function to print avg of 3 number

function avg(a,b,c){
    average = (a+b+c)/3;
    return average;
}
console.log(avg(1,2,3));

// function tp print table

function table(num){
    for(let i=1; i<=10; i++){
        console.log(`${num} * ${i} = ${num*i}`);
    }
}
table(2);
