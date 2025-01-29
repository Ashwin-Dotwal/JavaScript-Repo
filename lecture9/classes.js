//classes in js

class Human{
  //properties
  age=22;
  weight=64;
  #weight1=65;
  height=5.9;

  //behaviour

  walking(){
    console.log("i am walking");
  }
  running(){
    console.log("i am running");
  }

  get fecthweigth(){
    return this.#weight1;

  }
  set modifyweight(val){
    this.#weight1=val;
  }
}

// creat object to access properties and behaviour

let obj = new Human();

console.log(obj.age);
console.log(obj.weight);
console.log(obj.height);
console.log(obj.fecthweigth);
obj.walking();
obj.running();


class Human1{
  //properties
  age1;
  age=22;
  weight=64;
  #weight1=65;
  height=5.9;

  constructor(newAge,newHeight,newWeight,newWeight1){
    this.age1=newAge;
    this.weight=newWeight;
    this.height=newHeight;
    this.#weight1=newWeight1;

  }

  //behaviour

  walking(){
    console.log("i am walking");
  }
  running(){
    console.log("i am running");
  }

  get fecthweigth(){
    return this.#weight1;

  }
  set modifyweight(val){
    this.#weight1=val;
  }
}

// creat object to access properties and behaviour

let obj1 = new Human1(35,4.9,55,72.5);

console.log(obj.age1);
console.log(obj1.height);
console.log(obj1.weight);
console.log(obj1.fecthweigth);

obj1.running();
obj1.walking();
