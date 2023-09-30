// IIFE => Immidiately Invoked Function Expression.
//Purpose => to prevent from pollution in the global scope in which variables or someother data is declared.

//How to apply iife ↡↡↡

(function mulTwoNum(num1,num2){
  console.log(num1*num2);
})(9,9) ;
// the function scope should be wrapped in round braces and the arguments should be passed next to round braces in same line.

// above function or some expression should be ended with ; as sometimes editor does not do own their own.
((name)=>{
console.log(`My name is ${name}`);
})("YASHWANTH");

((num1,num2)=>{
console.log((num1%num2));
})(10,9)  // O/P : remainder = 1