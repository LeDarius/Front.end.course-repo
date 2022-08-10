var a = "a";
var b = "b";
var c = 50;
var a = "a" , b = "b" , c = 50;
console.log(a,b,c);
a++;
console.log(a);
a--;

Outputs
var a = 10;
var b = 5;
var c = 50;
a
10
a + "world" "10world"
typeof a "number"
typeof a + "world" "numberworld"
typeof (a + "world" ) "string"

a + b  15
a - b  5
a * b  50
c / b  10
12 % 2  0
13 % 2  1
14 % 2 0
12 % 3  0
13 % 3  1
14 % 3  2
15 % 3  0

a == b  false
(a--) == (b*2)  false
(a) == (b*2)  true
a  10
a != b  true
a == b  false
a == "10"  true
a === "10"  false
a !== "10"  true
a > b  true
a < b  false
a < a  false
a > a  false
a >= a  true
a <= a  true

JavaScript Assignment Operators
var a = "a";
a++  10
a  11
a = a + 5  16
a += 5  21
a -= 5  16
a *= 5  80
a /= 5  16
a %= 5  1

JavaScript Arithmetic Operators
+ Addition
- Subtraction
* Multiplication
/ Division
% Modulus (Remainder)
++ Increment
-- Decrement

JavaScript Comparison Operators
== Is equal to
=== Identical same type as well
!= Not equal to
!== Not Identical
> Greater than
>= Greater than or equal to
< Less than
<= Less than or equal to

JavaScript String Operators
var a = "string";
var b = "hello";
var c = 50;
a "string"
a + b "stringhello"
a = a + b "stringhello"
a "stringhello"
a += " world" "stringhello world"
a "stringhello world"
a = a - b NaN

JavaScript Logical Operators
&& AND
|| OR
! Not
var a = "hello world";
// window.alert(a);
var intake = prompt(a);
var b = a + " " + intake;

var a = prompt("your name");
document.write("hello, " + a);

var a = "hello world";
// window.alert(a);
var intake = prompt(a);
var b = a + " " + intake;

var a = prompt("your name");
document.write("hello, " + a);

Objects
person
Object {}__proto__: Object
person.firstName = "Mike"
"Mike"
person
Object {firstName: "Mike"}
person.lastName = "David"
"David"
person
Object {firstName: "Mike", lastName: "David"}firstName: "Mike"lastName: "David"__proto__: Object
person.lastName
"David"
typeof person
"object"
document.write ("hello")
undefined

var ourFriends = { name1 : "Laurence" , name2 : "Mike" , name3 : "David"};
var a = 1;
console.log(ourFriends['name' + a]);
a++;
console.log(ourFriends['name' + a]);
a++;
console.log(ourFriends['name' + a]);

var ourFriends = {
  person1: {
    name: "Laurence",
    age: 40 ,
    cars: {carMake :"Ford", carValue : 25000}
  },
  person2:{
    name: "Mike",
    age: 20
  },
  person3: {
    name: "David",
    age: 30
  }
};
var a = 1;
console.log(ourFriends['person' + a].name);
a++;
console.log(ourFriends['person' + a].name);
a++;
console.log(ourFriends['person' + a].name);

ourFriends.person1.cars.carMake
"Ford"
ourFriends.person1.cars.carMake = "GM"
"GM"
ourFriends.person1.cars.carMake 
"GM"
ourFriends.person1["age"] = 50
50
ourFriends.person1["age"] 
/*
var ourFriends = {
  name1: "Laurence",
  name2: "Mike",
  name3: "David"
};
*/

var ourFriends = ["Laurence","Mike","David"];

ourFriends (3) ["Laurence", "Mike", "David"] 
ourFriends[0] "Laurence"
ourFriends[1] "Mike"
ourFriends[2] "David"
ourFriends[3] undefined
ourFriends[1] = "Tim" "Tim"
ourFriends[1] "Tim"
ourFriends (3) ["Laurence", "Tim", "David"] Array(0)
ourFriends[9] = "Mike" "Mike"
ourFriends[9] "Mike"
ourFriends (10) ["Laurence", "Tim", "David", undefined × 6, "Mike"]
ourFriends.shift() "Laurence"
ourFriends (10) ["Mike", "David", undefined × 7, "New"]
ourFriends.unshift("Laurence") 11
ourFriends (11) ["Laurence", "Mike", "David", undefined × 7, "New"]
delete ourFriends[2] true
ourFriends (11) ["Laurence", "Mike", undefined × 8, "New"]
ourFriends.splice(2,8,"David") (8) [undefined × 8]
ourFriends (4) ["Laurence", "Mike", "David", "New"]0: "Laurence"1: "Mike"2: "David"3: "New"length: 4__proto__: Array(0)
ourFriends.splice(2,0) []
ourFriends (4) ["Laurence", "Mike", "David", "New"]
ourFriends.splice(2,1) ["David"]
ourFriends (3) ["Laurence", "Mike", "New"]

ourFriends.sort();
ourFriends.reverse();

var ourFriends = ["Laurence",1,4,5,0,"Mike","David"];
ourFriends[10] = "New";
ourFriends.push("Next item");
// console.log(ourFriends);
ourFriends.pop();
// console.log(ourFriends);
var f = ourFriends.toString();
var g = "Laurence,Mike,David,,,,,,,,New";
var h = g.split(',');
var i = ourFriends.join("*");
var nFriends = ourFriends.slice(1,3);

ourFriends (11) ["Laurence", 1, 4, 5, 0, "Mike", "David", undefined × 3, "New"]
ourFriends.indexOf("Mike") 5
ourFriends.indexOf("Mikezzz") -1
Array.isArray(ourFriends) true
Array.isArray(g) false

//array within array
var ourFriends = [
  ["Laurence", "Mike", "David"],
  [4, 5, 7]
];
console.log(ourFriends[0][2]);
//object within array
var myArray = [{
  name1: "Laurence",
  name2: "Mike",
  name3: "David"
}, {
  name1: "Tina",
  name2: "Dave",
  name3: "John"
}];
console.log(myArray[0].name3);
// array within an object
var myObj = {
  set1: ["Laurence", "Mike", "David"],
  set2: [4, 5, 7]
};

console.log(myObj.set1[2]);
var ourFriends = {
  name1: "Laurence",
  name2: "Mike",
  name3: "David",
  name4: "Last One"
};

var a = 4;
var b = 4;
while (a < 4) {
  console.log(ourFriends['name' + a]);
  a++;
}
do {
  console.log(ourFriends['name' + b]);
  b++;
}
while (b < 4);

var ourFriends = {
  name1: "Laurence",
  name2: "Mike",
  name3: "David",
  name4: "Last One"
};
for (a = 4; a < 4; a++) {
  console.log(ourFriends['name' + a]);
}

for(a in ourFriends){
  console.log(a);
  console.log(ourFriends[a]);
}

var ourFriends = ["Laurence","Mike","David"];
for (a = 0; a < ourFriends.length; a++) {
  //console.log(typeof a);
  //console.log(ourFriends[a]);
}

for(var x in ourFriends){
  //console.log(typeof x);
  //console.log(ourFriends[x]);
}

for (x of ourFriends){
  console.log(x);
}
myFun("new","one")  "new one"
var a = myFun("new","one")
a "new one"

function myFun(a,b){
  //to be exectued
  console.log(a + " " + b);
  return a + " " + b;
}
myFun("hello","world");

function mValues(a,b){
  return a * b;
}

console.log(mValues(5,6));

(function() {
  var b = 5;
  var test = "Hello World Init";
  console.log(test);
  if (b > 7) {
    return false;
  } //  break out of function
  console.log(test);
})();
var b = "Global B";
myFuna(b);
function myFuna(a) {
  var c = "Hello world";
  console.log(c);
  a += " world";
  b = a;
  console.log(a);
}
console.log(b);
function myFun(a, b) {
  //to be exectued
  console.log(a + " " + b);
  return a + " " + b;
}
var hw = myFun("hello", "world");
function mValues(a, b) {
  return a * b;
}
//console.log(mValues(5,6));
var ourFriends = ["Laurence", "Mike", "David"];
var q = ["Laurence", "Mike", "David"];
function toArray(array, addNew) {
  array.push(addNew);
  console.log(array);
  return "added new item :)";
}
//toArray(ourFriends,"New Item") ;
a "Hello World nice to see you again"
a.length 33
a.indexOf("see") 20
a.startsWith("Hello") true
a.startsWith("lo") false
var b = "google.com"; 
b.endsWith(".com") true
a.search("see") 20
a.replace("see","Saw") "Hello World nice to Saw you again"
a "Hello World nice to see you again"
a = a.replace("see","Saw") "Hello World nice to Saw you again"
a "Hello World nice to Saw you again"
a "Hello World nice to see you again"
a.slice(20) "see you again"
a.slice(20 , 22) "se"
a.substr(20,3) "see"
a.substring(20,23) "see"
a.toUpperCase() "HELLO WORLD NICE TO SEE YOU AGAIN"
a.toLowerCase() "hello world nice to see you again"

String methods
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
var a = "hello";
console.log(typeof a);
a = a.toString();
console.log(typeof a);
a = parseInt(a);
console.log(typeof a);

a 4.5
Math.round(a) 5
Math.floor(a) 4
Math.ceil(a) 5
Math.random() 0.6744542219573197
Math.random() 0.5432937750670424
Math.random() 0.8776023393374901
Math.floor(Math.random()*100) 69
Math.floor(Math.random()*100) 24
Math.floor(Math.random()*100) 99
Math.floor(Math.random()*100) 84
Math.floor(Math.random()*100)+1 18
Math.floor(Math.random()*101) 85

Date() "Tue Jul 11 2017 15:44:54 GMT-0400 (Eastern Daylight Time)"
var d = new Date();
d.getDate() 11
d.getDay() 2
d.getFullYear() 2017
d.getHours() 15
d.getMinutes() 45
d.getMinutes() 45
d.getTime() 1499802342185
d.getTime() 1499802342185
d.getTime() 1499802342185
d.getUTCMonth() 6
d.getMonth() 6
d.setMonth(7) 1502480742185
d Fri Aug 11 2017 15:45:42 GMT-0400 (Eastern Daylight Time)
d.setMonth(9) 1507751142185
d Wed Oct 11 2017 15:45:42 GMT-0400 (Eastern Daylight Time)
d.toDateString() "Wed Oct 11 2017"
d.toJSON() "2017-10-11T19:45:42.185Z"
var e = new Date()
e Tue Jul 11 2017 15:51:07 GMT-0400 (Eastern Daylight Time)
d.setMonth(6) 1499802342185
e-d 325258