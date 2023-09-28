// function == we can say it as set of code packed in a container is reused again as copies or set of copies.
//set of code writte once and used again whenever needed.

// console.log('Y');
// console.log('a');
// console.log('s');
// console.log('h');

// to write same thing again and again is irritating so we can use functions 

function myName(){
    // console.log('Y');
    // console.log('a');
    // console.log('s');
    // console.log('h');
}

myName()   // O/P : Yash↡ vertically. // we can use it again and again to save space or for code optimisation.

// this is function definition
//() brackets and values passed in it after function name is called parameters
// while calling function like above myName()<< passing some value in() while calling is called arguments(values).
// function dsds (){

// }

function addTwoNumbers(num1,num2){
//num1+num2  
// this will not execute anything as we have not put in console.log

// console.log(num1+num2)
}

// 
// addTwoNumbers(2,7) // O/P : 9 
// we can also store it in the variable↡

const result = addTwoNumbers(1,8)  // O/P : 9
// console.log("RESULT = ",result);
// but if we console.log result O/P : NaN because we have not returned the value in variable.

function subTwoNumbers(number1,number2){
    return number1 - number2;
}
 const result2 = subTwoNumbers(10,1)
//  console.log("Result2 = ",result2);

 function userLoggedIn(username){
    return `${username} Just logged in`
 }

//  userLoggedIn("Yashwanth")
// const message = userLoggedIn("Yashwanth")
// console.log(message);

// console.log(userLoggedIn("YKP9")); 

function userLoggedOut(username1) {
if(!username1){
    console.log("Please enter a username");
    return
}
return`${username1}Logged out`
}

// console.log(userLoggedOut(""));   // O/P=> Logged out
// console.log(userLoggedOut());    // O/P=>Please enter a username
// console.log(userLoggedOut("YKP9"));

// example problem adding items in cart and adding prices

function cartItems(price){
    return price
}
console.log(cartItems(10000)); 
//above if we add multiple values it will only execute or include first value so to avoid that we have to use rest operator


function cartItem(...price1){
    return price1
}
console.log(cartItem(10000,200,466,764,130,789)); // it will put all the prices in an array.

// how to use object in functions

const newObject = {
    usernamee : "Yashwanthh",
    items : 5,
    totalAmount: 15976
}
function userObject(anyObject){
    return `The UserName is ${anyObject.usernamee} , items are ${anyObject.items} ,Total amount is ${anyObject.totalAmount}`
}
// console.log(userObject());  two methods for output

// console.log(userObject({
//     usernamee:"piygasg",
//     items:7,
//     totalAmount:78868
// }
// ));

// function to use in array to access element in array
const randomArray = [444,44,2127,4545458,5444,3353535]

function newArray(anyArray){
    return anyArray[1]
}
console.log(newArray(randomArray));