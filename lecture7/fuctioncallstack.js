
//function callstack

//function for variable  asign

let greet=function(){
  console.log("greeting for the day")
}
greet();

//function pass
 
function greetme(greet1,fullname){
  console.log("hello ",fullname);
  greet1();
}

function greet1(){
  console.log("greeting for the day")
}

greetme(greet1,"ashwin dotwal")

//function return  

function solve(number){
  return function(number){
    return number*number;
  }
}
let ans=solve(5);
let finalAns=ans(10);

console.log(finalAns);

//array of function 

const arr =[
  function(a,b){
    return a+b;
  },
  function(a,b){
    return a-b;
  },
  function(a,b){
    return a*b;
  }
];

let first=arr[2];
let ans1=first(5,10);
console.log(ans1);

//function in object

let obj = {
  age: 22,
  wt: 65,
  ht: 5.9,
  greet2:()=>{
    console.log("hello dunia");

  }
}
console.log(obj.age);
obj.greet2();