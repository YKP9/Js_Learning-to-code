// Block scope and Global scope.
let a = 5
const b = 9
var c = 10

console.log(a);
console.log(b);
console.log(c);
// it will ececute normally 5 9 10
// but in the scope the nature changes
//{} curly braces are scope.
//code inside conditions or functions or etc are block scope other things are in global scope which is the body of code.


//for example below ↧⇩
 if(true){
let d = 4
const e = 4
var f = 4
// code or conditions started here should be end in this block scope
// check if we console.log outside the scope what happens.
 }
//  console.log(d);  // not defined as variables are declared in scope
//  console.log(e); // not defined as variables are declared in scope
 console.log(f); //4  // it will execute as it is nature of var so we should avoid it.

 // if we use let with same variable in global scope and block scope it differenciates.
 let num = 99

 if(true){
    let num = 99
   //  console.log("NUMBER = ",num); // => 99
 }

//  console.log(num);  // O/P => 99


 // SAME WITH CONST
 const num1 = 199

 if(true){
    const num1 = 199
   //  console.log("NUMBER = ",num1); // => 99
 }

//  console.log(num1);  // O/P => 99

 // variables or somthething declared in global scope can be accessed in block scope.

//  ######################## IMPORTANT ######################

function one(){
   const username ="Yashwanth"

   function two(){
const website = "Insta"
console.log(username+website);
   }
   // console.log(website); 
   // it will not be executed as it is out of the scope. child can access parent variable but parent can not.

   two()  //if we do not execute two() ther is nothing to execute meaning no error but no output as well
   // console.log(two()); // undefined
}
one() 

// the process of whole function call in a function is stored in different stack .we say it as closure..

if (true){
const usernamess = "Yashwanthh"
 if(usernamess === "Yashwanthh"){
   const websites = "Youtube"
   console.log(usernamess + websites);
 }
//  console.log(website); // will not be executed as it is outside of its scope
}
// console.log(usernamess); // (2) will not be executed as it is outside of the scope

// ************ Hoisting basic ****************

console.log(addOne(5));
// normal function declaration
// In this function can be called before declartion
function addOne(num){
   return num +1;
}

// in function expression we can not call function before declaration

// console.log(addTwo(7));  // cannot access before initializtion.

const addTwo = function(num1) {
return num1 + 2; 
}
console.log(addTwo(7));


// functions stored in variable is called expression.

