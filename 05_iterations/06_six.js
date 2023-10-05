// lets check whether it the for..each can be stored in other value and can be executed
const myCoding = ["JS","Java","Cpp","Python","C","Csharp"];

const newlang = myCoding.forEach( (item) => {
    // console.log(item);
    return item
})

// console.log(newlang);  // in for...each the item cannot be returned.

const myNums = [1,7,9,2,8,3,6,5]

const newNums = myNums.filter( (num)=> {
    // num>5 // gives empty array because scopes are applied so it is explicit return , we have to use return

    return num>5;
})
// console.log(newNums);

// filter property is used to extract info something from array or objects or databases.

// do same above problem with for..each

const numbers = [7,77,59,68,34,97,4,46,4,36,75,79]
const gnums = []
numbers.forEach( (nums) => {
    if(nums>=50){
       gnums.push(nums)
    }
})
// console.log(gnums);

const characters = [
    {
      name: "Luke Skywalker",
      height: 172,
      mass: 77,
      eye_color: "blue",
      gender: "male",
    },
    {
      name: "Darth Vader",
      height: 202,
      mass: 136,
      eye_color: "yellow",
      gender: "male",
    },
    {
      name: "Leia Organa",
      height: 150,
      mass: 49,
      eye_color: "brown",
      gender: "female",
    },
    {
      name: "Anakin Skywalker",
      height: 188,
      mass: 84,
      eye_color: "blue",
      gender: "male",
    },
  ];

  const extracted = characters.filter( (chara)=>{
    // return (chara.gender === "female")
    return chara.eye_color === "blue"
  })
  console.log(extracted);