//variable scoping

//globle scoping

var age=25;

console.log(age);


{
  console.log(age)
}

if(true){
  console.log(age)
}

// function scoping

function SayHello(){
  var fullname="earth";
  console.log("hello Dunia",fullname);
}
console.log(fullname);
SayHello();