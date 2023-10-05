// for in loops is used on objects for iterations

const myObject ={

js : "JavaScript" ,
Cpp : "C++",
Java : "Java",
swift : "Swift by apple",
rb:"RUBY"
}

for (const key in myObject) {
    // console.log(key); // to print the keys
    // console.log(myObject[key]); // to print the value
    // console.log(`${key} : ${myObject[key]}`);
}

// for in on arrays
const progLang = ["Js","CPP","Python","Java","C",]
for (const key in progLang) {
    // console.log(key);  // prints the index , arrays also acts like object 
    console.log(progLang[key]); // to print the items in the array.
}

// for in does not work on map because map is not iterable.
// for...in iterates over enumerable properties of an object. The keys in a map are not enumerable properties (though a map, like all objects, can have enumerable properties).