// const runs = 123;
// console.log(runs); 

// const teamScore = new Number(450)
// console.log(teamScore.valueOf());

// const totalPrice = new Number(456.000000000000000000000000000) 
// console.log(totalPrice.toFixed(3)); //456.000
//  // specially used in ecommerce such websites in bills to reduce the decimals in price to avoid confusion. 

// const heightIncm = 123.57863
// console.log(heightIncm.toPrecision(4));  // 123.6
// // it roundups the number but the 
// //  digit value given should be atleast bigger otherwise it converts into exponential or makes the number to digit value given.

// const amount = 1000000000000000
// // console.log(amount.toLocaleString());
// console.log(amount.toLocaleString('en-In')); //1,00,00,00,00,00,00,000
// //adds indian style ,seperating numbers to read big number


/************************* MATHS ***********************/

console.log(Math.random());  // give random number b/w 0 and 1 ==> 0.205634897

console.log(Math.random()*10); // gives random number b/w 0 to 9 with decimals ==> 9.7885543

console.log(Math.random()*10 + 1); // to avoid 0 in o/p

console.log(Math.floor(Math.random()*10 + 1)); // gives whole number b/w 1 to 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min));  // gives number b/w 10 and 20 min=10

console.log( Math.ceil(Math.random()*10+1)); // if decimal is there it will round up and give next number in ceil opposite in floor.

const  num = 2
console.log(Math.sqrt(num));

const a = 3
const b = 9
console.log(Math.abs(a-b)); // abs make negative to positive number.