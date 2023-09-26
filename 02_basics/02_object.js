//What are the objects in JavaScript?
// An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.

//Two ways to declare an array =>object literals && constructors
// In object literals if we create {singleton} is created . ex: object.create
// object literls => multiple instances are created 
const key1 = Symbol("35sd735")

const accountUser = {
    name : "yashwanth pillai",
    age : 22,
    email: "ykp@google.com",
    [key1]: "8w89w6+7",
    isLoggedIn: false,
    recentLoginDays: ["Monday","Saturday"],
    "fullName" : "Yashwanth Kailash Pillai"// another example for square brackets access


}
//to access array 1st method
//console.log(accountUser.name);
//console.log(accountUser.email);
//2nd method
// this method is used because in some case to print out put this syntax is mandatory.
// console.log(accountUser['recentLoginDays']);
// console.log(accountUser.key1); // undefined output
// console.log(accountUser[key1]);
// console.log(typeof accountUser[key1]);  // string we cannot access using key method.

//console.log(accountUser); // output in symbol=> [Symbol(35sd735):'8w89w6+7']


//also make changes in keys

accountUser.email = 'ykp.99@mail.com'
//console.log(accountUser); // email is updated.

//console.log(accountUser['fullName']);

// to make no more changes object.freeze is used.

// Object.freeze(accountUser)

// accountUser.age = 25 // no age is updated because object.freeze applied.

accountUser.greeting = function(){
    console.log("Ram_Ram");
}
console.log(accountUser.greeting());
//reference from function to an key .

accountUser.greeting2 = function(){
    console.log(`Ram_Ram ${this.name}`);//`` means string interpolation
}
console.log(accountUser.greeting2());