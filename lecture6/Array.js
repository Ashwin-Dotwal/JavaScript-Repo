//create object in js

let obj ={
  name: "ashwin",
  age : 22,
  weght:65,
  height:5.9,

  greet :function () {
    console.log("hello ji kaise hai saare");
    
  }
};
console.log(obj);
obj.greet();
console.log(typeof(obj));



//shallow copy in object
console.log("shallow copy");
let obj2=obj;

console.log(obj2);

//arrays in js

//creation of array

let arr =[1,2,5,8,9];
console.log(arr);
//array constructor

let brr=new Array('ashwin',1,true);

console.log(brr);


let crr= [1,'love',true,false];

console.log(crr);

console.log(typeof( arr,brr,crr));

//access array element by there index

console.log(arr[1]);
console.log(brr[1]);
console.log(arr[3]);
console.log(brr[2]);
console.log(crr[1]);
console.log(arr[0]);
console.log(crr[2]);


//build-in metods in js
//push and pop 
let build=[1,8,9,5,6,3];
build.push(10);
console.log(build);

build.pop();
console.log(build);

//shift and unshift

build.shift();
console.log(build);

build.unshift('ashwin dotwal');
console.log(build);
//slice method 

build.push(24);
build.push(74);

console.log(build.slice(2,5));
console.log(build);

//splic

build.splice(1,2,'gautam');
console.log(build);

//map function in js array

let arr1=[10,20,30];

let ansarray =arr1.map((number) =>{
  return number*number
})

console.log(ansarray)


let arr2=[20,30,40];

arr2.map((number,index)=>{

  console.log(number+2);
  console.log(index);
}
)
//filter in array js

let filt=[10,50,25,80,63,45];
let evenarray=filt.filter((number)=>{
  if(number%2===0){
    return true;
  }
  else{
    return false;
  }
}
);
console.log(evenarray);

let filt1=[10,'ashwin','dotwal',25,null,'age'];

let filterans=filt1.filter((value)=>{
  if(typeof(value)=='string'){
    return true;
  }
  else {
    return false;
  }
 
});
console.log(filterans);



//Reduce in array js
let redu=[10,20,30,40];

let redans=redu.reduce((acc,curr)=>{
  return acc+curr;
},0);

console.log(redans);

//sort function in array

let arr3=[9,5,8,4,6,2,3];

arr3.sort();

console.log(arr3); 
console.log(arr3.indexOf(6));


let arr4 = [9, 5, 8, 4, 6, 2, 3];

arr4.sort((a, b) => b - a); // Sorts in descending order

console.log(arr4);
console.log(arr4.indexOf(2));


//for-each in array for  pint index and value
let arr5=[9,5,8,4,6,2,3];
let length=arr5.length;
console.log("length",length);

arr5.forEach((value,index) => {
  console.log("number",value,"index",index);

  
});

//for-in loop in array in js
let obj1 ={
  name: "ashwin",
  age : 22,
  weght:65,
  height:5.9,

  greet :function () {
    console.log("hello ji kaise hai saare");
    
  }
};

for (let key in obj1) {
 console.log(key ," ",obj1[key]);
  
}

//for-of loop in array in js

let arr6=[10,20,50,60];

for(let value of arr){
  console.log(value);
}
//array with function 

let arr7=[10,20,30,60,40];

function getsum1(arr7){
  let len=arr7.length;
  let sum =0;
  for(let index =0;index<len;index++){
    sum =sum+arr7[index];
  }
  return sum;
}

let totalsum=getsum1(arr7);
console.log(totalsum);