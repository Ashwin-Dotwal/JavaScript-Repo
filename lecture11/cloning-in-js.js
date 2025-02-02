//cloning in js

let obj={
  age:22,
  wt:68,
  ht:180

}
console.log(obj);
obj.color="white";
console.log(obj);

//object cloning using spread operator
let src={
  age:22,
  wt:68,
  ht:180

}
let dest={...src};
src.age=90;
console.log("src",src);
console.log("dest",dest);

//cloning using assign opretor

let src1={
  age:55,
  wt:45,
  ht:189
};

let dest1=Object.assign({},src1);

src1.age=44;
console.log("src1",src1);
console.log("dest1",dest1);

//cloning using iteration


let src2={
  age:26,
  wt:65,
  ht:179
};
let dest2={};

for(let key in src2){
  let newKey=key;
  let newValue=src[key];

  dest2[newKey]=newValue;
}
src2.age=12;

console.log("src2",src2);
console.log("dest2",dest2);