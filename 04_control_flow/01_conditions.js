// if => The if...else statement executes a statement if a specified condition is truthy. If the condition is falsy, another statement in the optional else clause will be executed.
//An expression that is considered to be either truthy or falsy.
//
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");

// Comparison operators ↡↡↡
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`); 
// It will throw error for above console.log↟↟↟ because it is out of the if-else scope


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");
// we can use above syntax but not recommended, to messy,

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }    // nested if else

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

// && => true true = true
// && => true false = false
// && => false true = false
// && => false false = false

// || => true true = true
// || => true false = true
// || => false true = true
// || => false false = false