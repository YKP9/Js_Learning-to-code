// array is object , array is a variable where we can store multiple items in a single variable.
//array items can be mix of numbers booleans and strings and also array can be stored in a array also functions.
// array indexing starts from 0
// array can be accessed using index.
const arr1 = [1,2,3,4,5] 
// console.log(arr1[2]);

const indianSquad =  new Array("rohit","virat","dhoni","sachin","sehwag","ganguly","yuvraj","jadeja","Ashwin","bumrah","bhuvneshwar")
// console.log(indianSquad[5]);
// console.log(indianSquad.length);
// for(i=0; i<indianSquad.length; i++){
//     console.log(indianSquad[i]);
// }

// array methods or prototypes ==>> 
// push pop / shift unshift/ slice splice
// some interogative method ==> include or index or length

const digits = [1,2,3,4,5,6,7,8,9]

digits.push(999)  // push => pushes new item in am array from endside 
// console.log(digits);
// console.log(digits.pop()); // removes last item or element from the array

// shift and unshift
digits.unshift(88)  // adds new item in an array from top or start of an array , but it causes problem because every element position is shifted by 1 position, if the array is bigger it is not recommended.
// console.log(digits);

digits.shift()  // removes the first element of an array.
// console.log(digits);

// slice splice

const newDigits = [11,22,33,44,55,66,77,88,99] 

const newarr = newDigits.slice(1,6) // slice excludes index position values which are not given in bracket also the last position given ex: 6,here and prints everything in o/p but original array remains the same. 
// console.log(newarr);
// console.log(newDigits);

const newarr1 = newDigits.splice(1,6) // splice does same as slice but also prints/includes last position given but original array changes means in this case // digits = [11,88,99] the remaining values is updated array. 
// console.log(newarr1);
// console.log(newDigits);


// console.log(digits.includes(77)); //false => because updated array does not consist 77. 

const batsMan = new Array("rohit","virat","dhawan","rayudu","yuvraj","raina","dhoni")
// console.log(batsMan);
const bowlers = ["ashwin","shami","bumrah","siraj","bhuvneshwar","chahar","kulddep"]

//methods to to merge two arrays
// batsMan.push(bowlers)
// console.log(batsMan[7]);
// console.log(batsMan);  // it is adding the whole array of bowlers as one array in batsman --not reccomended

const squad = batsMan.concat(bowlers)
// console.log(squad); // merges all array,without brackets

const finalSquad = [...batsMan,...bowlers]
console.log(finalSquad); // spread operator
// same it also merges the arrays as concat method this is recommende as there is no limitation as concat to add 1 we can merge multiple arrays sing spread opeartors.

const name = "yashwanth"
console.log(Array.isArray(name));   // method to check it is array or not.
console.log(Array.from(name)); // method to convert anything into array.

const  classs = {roll_No : 159}
console.log(Array.from(classs)); // returns an empty array because we have not given what to make array keys or values.

const address = 'Mumbai'
console.log(Array.of(address,name)); // makes it into array as one whole element.

const randomNo = [1,8,9,7,[7,8,9],444,797,945454,998,[7,2,263,7[1,2,3]]]
console.log(randomNo.flat(Infinity));  // if there are multiple arrays in an arry flat method makes it one single array convert it into array elements.