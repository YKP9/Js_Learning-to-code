// this and arrow function

//below this keyword is used to show the crrent context in the object meaning it is referring to the current values in the scope . 
// this is used to refer or show current context, if the values are updated it will refer to updated values.
const user ={
    username : "Yashwanth",
    id : "YKP9",
    totalAmount : 686868,
    amountMessasge : function(){
            console.log(`hurray ${this.username} your id ${this.id} total amount of cart is ${this.totalAmount}`);
            console.log(this); // shows all the keys and values in output as it shows cuurent context but outside of scope its nature changes
    }
   
}

// user.amountMessasge(); 
// user.username = "Pillai" ,
// user.id = "P9" ,
// user.totalAmount = 686868687

// user.amountMessasge();

// console.log(this); // shows an empty object or paranthesis,because there is no current context in global scope , this behaviour is in node enviorment
//but in browser shows window object , because in browser global object is window object.
const obj = {
    usernamee : "Yashwanth",
    // hello : () => console.log(`'hello ', ${this.usernamee}`)
  };
//   obj.hello()
  // in arrow functions this keyword does not work.
//   An arrow function expression (also known as fat arrow function) has a shorter syntax compared to function expressions and lexically binds the this value.

const game = function(){
    let gameName = "Contra"
    console.log(`My favourite game is ${this.gameName}`);
}

// this or accessing the context does not work in function, it works in object .

function name(){
    console.log(this);
}
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
// chai() // gives empty paranthesis.

// in arrow functions parameter passed is only used in scope
// one way to use arrow function // explicit return where curly braces are used and values are returned
 const addTwoNum = (num1,num2)=>{
     return (num1 + num2) 
 }
// console.log(addTwoNum(7,2));

// Implicit return where curly braces are not used so no need to use return keyword.

const subTwoNum = (num1,num2) => (num1-num2)  // IMPLICIT RETURN where return keyword is preassumed.

console.log(subTwoNum(10,1));

// to return a object we need to wrap curly braces inside round braces

const user2 = (name) => ({username: "Yashwanth"})

console.log(user2());