// stack and heap memory.
//stack (All primitive datatypes are stored in stack)
//Heap(All NPDT are stored in heap)

let myProfile = "YASHWANTHPILLAI9"
let myProfile2 = myProfile

console.log(myProfile); //prints same value 
console.log(myProfile2) //prints same value 

myProfile2 = "PILLAIYASHWANTH09"

console.log(myProfile);  // HERE PRINTS THE VALUE ASSINGED .
console.log(myProfile2); // HERE PRINTS THE VALUE ASSINGED .

// IN STACK FOR EX. myProfile and myProfile2 two values are stored, first both was assinged same values after that myProfile2 value was changed, so the changes are made in copy thats why also assing equal values to them still both names were changed. In stack changes are made in copy and the original value remains same or as it is.

let user1 = {
    name : "Yashwanth",
    UPI : "4747474364@ybl",
    Email : "yash@google.com" 
}

let user2 = user1

console.log(user1); //prints same values
console.log(user2); //prints same values

user2.Email = "pillai@pokemon" 

console.log(user1); // prints same values which are also changed
console.log(user2); // prints same values which are also changed

// IN HEAP MEMORY THEY ALL ARE GIVEN REFERENCE TO A STORAGE, SO ANY CHANGES MADE WILL REFLECT IN EVERYONE IF THEY ARE ASSINGED EQUAL.
// HEAP (CHANGE ARE MADE IN REFERENCE COPY). 