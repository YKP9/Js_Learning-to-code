// for...each loop is most used loop for array.

const myCoding = ["JS","Java","Cpp","Python","C","Csharp"];

// in for..each loop to print we have to use call back functions

// myCoding.forEach((item) => {
//     console.log(item);
// });  
// we used arrow function

// we can do it with normal function

// myCoding.forEach(function(value){
//     console.log(value);
// })

myCoding.forEach((item,value,arr)=>{
    console.log(item,value,arr);
})

const langObject = [
    {
        languageName : "JavaScript",
        languageFile : "js"
    },
    {
        languageName : "Java",
        languageFile : "java"
    },
    {
        languageName : "Python",
        languageFile : "py"
    }
];

langObject.forEach((item)=>{
    console.log(item.languageFile);
});