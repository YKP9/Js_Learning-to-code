let myName = "Yashwanth"
let myAge = 21

// console.log(myName + myAge); // one way to concatenate string

// console.log(`My name is ${myName} & age is ${myAge}` ); // another way to concanetate string called as string interpolation . in ( ${expression} ) this is called placeholders where we can perform any expression and set it in the string.
 
let favBook = new String('NeverFinished') // aanother way to declare string.
// console.log(favBook.endsWith());

// let myNum = 9994748497
// let num = myNum.toString()
// console.log(typeof num);

// reverse a string

// let revString = favBook.split('')
// console.log(revString);
// let newString = revString.reverse()
// console.log(newString);
// let reversedString= newString.join("")
// console.log(`The reversed string is  ${reversedString}`);

//substring slice endsat trim tostring includes replace charat 

let finalMatch = new String('IndiaVsSrilanka') 

// console.log(finalMatch.substring(0,5)); // it makes a new string starting from index number given and will stop before the final number given , the last number is leftout.
console.log(finalMatch.substring(-9,1));
console.log(finalMatch.substring(9,4));  // below difference in substring it automatiacally swaps the number if index 

console.log(finalMatch.slice(9,4));  

//difference in substring and slice prototyoe method
// The substring() method swaps its two arguments if indexStart is greater than indexEnd , meaning that a string is still returned. The slice() method returns an empty string if this is the case

console.log(finalMatch.endsWith('lank'));  // checks the given string is at the end if yes prints true else gives false.

// console.log(finalMatch.trim()); //removes teh whitespace ate both ends

const qoute = "FINISH WHAT YOU START";

const word = 'is'

console.log(`the word ${word} are ${qoute.includes(word)? 'is': 'is not'} in the sentence`)// checks whether the given word is there in the string.
