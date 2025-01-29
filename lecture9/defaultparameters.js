//default parameter
//normal function
function sayName(myName) {
  console.log("my name is", myName);
}

sayName("ashwin dotwal");

//default parameter when value not pass
function sayName(myName = "Prabhu deva") {
  console.log("my name is", myName);
}

sayName();

//default parameter when value pass
function sayName(myName = "Prabhu deva") {
  console.log("my name is", myName);
}

sayName("ritik roshan");

//default parameter  two value pass or not pass

function sayName(fname = "rana", lname = "singh") {
  console.log("my name is", fname, " ", lname);
}

sayName();
