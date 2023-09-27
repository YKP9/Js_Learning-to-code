// const insta1User = new Object()
const instaUser = {};

instaUser.id = "789_ykp";
instaUser.password = "$%456123pr";
instaUser.phoneNo = 9999999999;

// console.log(instaUser);

const userName = {
  userFullname: {
    name: {
      firstName: "Yashwanth",
      lastName: "Pillai",
    },
  },
};

// console.log(userName);
// console.log(userName.userFullname);
//    console.log(userName.userFullname.name);
//    console.log(userName.userFullname.name.lastName);
// console.log(insta1User);
// console.log(instaUser);

const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}

//object.assign method to merge two arrays
// const obj3 = Object.assign({},obj1,obj2)  
// console.log(obj3);

// obj3 = obj1+obj2
// console.log(obj3); // o/p=>[object object] [object object]

//spread operator to merge two arrays

obj3 = {...obj1,...obj2}
// console.log(obj3);


const users = [
    {
    id : 1,
    email : "uewiew@instaUser.com"
},

{
    id : 2,
    email:"uewie@instaUser.com"
},
{
    id : 3,
    email:"uewi@instaUser.com"
},
{
    id : 4,
    email:"uew@instaUser.com",
}
]
    


// console.log(users[1].email);
// console.log(users[3].id);
// users[2].email

// console.log(instaUser);
// to print only keys
// console.log(Object.keys(instaUser));  // gives the ouput in array
// console.log(Object.values(instaUser));

// console.log(Object.entries(instaUser)); // changes the object into an array.

// hasownproperty checks whether this particular instance is there in in object or not.
// console.log(instaUser.hasOwnProperty('isLoggedIn'));

// destructure of objects or data
const course = {
    coursename : "JavaScript",
    durationinMonths : 3,
    courseInstructor: "Hitesh Choudhary"
}


// is used to avoid object.instanceName meaning => course.coursename everytime , its like shortcut to access
const {coursename} = course
console.log(coursename);

// here we can also make shortform of instance names
const{courseInstructor:HC} = course
console.log(HC);


// JSON

// {
//     "name" : "Yashwanth Pillai" 
//     "id" : "455362$%^4"
//     "password" : "dif-9uI"
// }
// it is basic structure of json format {JSON} => JAVASCRIPT OBJECT NOTATION.

// json format can also be an array and ↑object↑.

