// for of loop => used mainly on arrays 

// for (const iterator of object) {
    
// }
 // above iterator give any name 
 // object perspective means a thing like it can be used on array strings and object

 const arr = [1,86,87,15,7,44] 

 for (const val of arr) {
    console.log(val);
    // console.log(val+10);
 }

 const gretting = "HELLO WORLD";

 for (const greet of gretting) {
    
    if(greet===" "){
        continue;
    } 
    // console.log(`message is ${greet}`);
    
 }

 // space is skipped as continue is used

 
 const randomQuote = "FINISH WHAT YOU START";

 for (const quote of randomQuote) {
    
    if(quote==="U"){
        break;
    } 
    // console.log(`message is ${quote}`);
    
 }

 // after u iteration will be stopped due to break.
 // we can also use break and continue in for of loop

 // for of in map
 // map is object , where every key is to be unique.
 const coutryCapitals = new Map()

 coutryCapitals.set("India","Delhi")
 coutryCapitals.set("France","Paris")
 coutryCapitals.set("USA","New YORK")

 for (const [key,value] of coutryCapitals) {
    console.log(key, ":-", value);
    
 }