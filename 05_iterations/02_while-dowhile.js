// while loop↯

// while (condition) {
    
// }  //=> syntax

// print even numbers from 1 to 10

let i = 1
// console.log("Even Num Are");
while (i<=10) {
    
    if(i%2===0){
        // console.log(i);
    }
    i++
}

// dowhile
//mainly used when at least once we have to run the expressions in the loop

let j = 1
do {
    console.log(j);
    j++
} while (j<=10);

console.log("\n");
// it will print numbers from 1 to 10
// another example

let k = 11
do {
    console.log(k);
    k++
} while (k<=10);

let arr = [1,2,3,5,86]
let p=0
while (p<arr.length) {
    console.log(arr[p]);
    p++
}