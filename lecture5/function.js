//syntax of function

//function dafination
function sayMyName() {

  console.log("Ashwin Dotwal");
  
}

//functiom use -function call

sayMyName();

//function for print counting

function printcounting() {
  for (let i = 0; i <=10; i++) {
   console.log(i);
    
  }
  
}
printcounting();

//function with perameter pass in function para

function printnum(num) {
  console.log("printing Number",num);
  
}

printnum(5);


//for multiple perameter

function getaverage(num1,num2) {

  let avg=(num1+num2)/2;
  console.log("Average",avg);
  
}
getaverage(6,8);

//return function 

function getsum(a,b,c) {
  let sum=a+b+c;
  return sum;
  
}

let ans=getsum(1,2,3);

console.log("printing sum",ans);

//return function 

function getmyname(firstname,lastname) {
  let fullname=firstname+" "+lastname;

  return fullname;
}

let fullname=getmyname("Ashwin","Dotwal");

console.log("fullname is ",fullname);


let getMultiplication =function(a,b){
  return a*b;
}

let ans1=getMultiplication(2,20);

console.log(ans1);