//compile time error

//syntax error
//console.log(1;

//run time error

//refrance error

//console.log(x);

//error handling using try cacth  

try{
  console.log("try block start here");
  console.log(x);
  console.log("try block end here");
}

catch(error){
  //define karte h ,error k sath aap kya karna chahte hai
  //retry logic
  //fallback mechenism
  //logging
  //custom error

  console.log("I am inside catch block");
  console.log("your error is here",error);
}

//finally block

try{
  console.log("try block start here");
  console.log(y);
  console.log("try block end here");
}

catch(error1){
  //define karte h ,error k sath aap kya karna chahte hai
  //retry logic
  //fallback mechenism
  //logging
  //custom error

  console.log("I am inside catch block");
  console.log("your error is here",error1);
}

finally{
    console.log("I will run everytime ,as i am finally block");
}