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
console.log(digits);
console.log(digits.pop()); // removes last item or element from the array

// shift and unshift
digits.unshift(88)  // adds new item in an array from top or start of an array , but it causes problem because every element position is shifted by 1 position, if the array is bigger it is not recommended.
console.log(digits);

digits.shift()  // removes the first element of an array.
console.log(digits);

// slice splice

const newDigits = [11,22,33,44,55,66,77,88,99] 

const newarr = newDigits.slice(1,6) // slice excludes index position values which are not given in bracket also the last position given ex: 6,here and prints everything in o/p but original array remains the same. 
console.log(newarr);
console.log(newDigits);

const newarr1 = newDigits.splice(1,6) // splice does same as slice but also prints/includes last position given but original array changes means in this case // digits = [11,88,99] the remaining values is updated array. 
console.log(newarr1);
console.log(newDigits);


console.log(digits.includes(77)); //false => because updated array does not consist 77. 