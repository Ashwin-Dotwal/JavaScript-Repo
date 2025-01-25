//create string
let firstname="ashwin";
 
let lastname="dotwal";

let fullname="ashwin dotwal";

console.log(firstname);

console.log(lastname);

console.log(fullname);

//string print in two line using tilda key

let name1=`My 
Name
is
Ashwin 
DOtwal`

  console.log(name1);

  //create string using new string function 

  let fullname1=new String("ASHWIN DOTWAL");

  console.log(fullname1);

//operation on string 

//Addition on string ++++

  let opt1="english";
  let opt2="hindi";

  let ans=opt1+opt2;

  console.log(ans);

  //use of backticks `` tilda

  let opt11="english";
  let opt22="hindi";

  let ans1=`${opt11} ${opt22}`;

  console.log(ans1);

  //length of string

  let lan1="english";
  let lan2="hindi";

  console.log(lan1.length);
  console.log(lan2.length);

  //upercase and lowercase
  let lan11="english";
  let lan22="HINDI";

  console.log(lan11.toUpperCase());
  console.log(lan22.toLowerCase());

  //substring in string

  let str="ASHWIN DOTWAL";

  console.log(str.substring(8));
  console.log(str.substring(6,9));

  //split method in string

  let sentence ="Hello ji kaise ho saare";

  let words=sentence.split(' ');

  console.log(words);