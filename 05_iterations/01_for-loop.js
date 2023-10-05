// loop => set of instruction repeated for a given number of times
// for (let i = 0; i < array.length; j++) {
//     const element = array i];
    

// }   // basic syntax of for loop

// loop to print from 1 to 10
for (let i = 1; i <=10; i++) {
    const element = i;
    console.log(element);
    
} // => basic

// using if else in loops
// i variable is only for particular scope and the values of scope cannot be accessed outside of scope.

for (let i = 1; i <=10; i++) {
    const element = i ;
    if(i==7){
        console.log(`${element} is my favourite number`);
    }
    console.log(element);
}
// in the above the iteration will happen and it will also check if condn from 1 to 6 it will be printed then if condn is executed and the loop is continued again.

// loop to print tables 1 to 10.

for (let i = 1; i <=10; i++) {
    console.log(`Table of ${i}`);
    for (let j = 1; j <=10; j++) {
        console.log(`${i} * ${j} = ${i*j} `);
      
    }
    
    console.log("\n");
}

// break and continue
// break => used to terminate the scope or stop the expression in the loop
// continue is used to skip that particular thing given and continue the loop to execute.

for (let i = 1; i <=10 ; i++) {
    const element = i;
    if (i==5)
{
    console.log(`${element} is detected`);
    break;
}
    console.log(element);
}
console.log("\n");

//=> continue
for (let i = 1; i <=10 ; i++) {
    const element = i;
    if (i==5)
{
    // console.log(`${element} is detected`);
    continue
}
    console.log(element);
}
// here 5 is skipped.

