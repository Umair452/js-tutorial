//Primitive data type

//String, Number, Boolean, NUll, undefined, Symbol, BigInt

// const id = Symbol("123");
// const anotherId = Symbol("123");
// The above two are not the same because symbo makes them unique

//const number = 383798749743873497943794n; the integer is now big int because of n 


//Reference / Non-primitive Arrays, Objects, Functions

const heroes = ["Salman", "Shahrukh", "Amir"];
let id ={
    name: "Umair",
    age: 24,
}

const myFunction = function (){
    console.log("First function");
}


//memory types summary
//Stack(primitive), Heap(non-primitive)
let myName = "Umair";
let anotherName = myName;
anotherName = "Arshad";
// console.log(myName);
// console.log(anotherName);
//changing anotherName wont change myName because it is working in stack 

//Now heap
let userOne ={
    id:1,
    name:"Umair",
    email:"umair@gmail.com"
}
let userTwo = userOne;
console.log("Before changing  " + userOne.email);
userTwo.email = "muhammadumair@gmail.com";
console.log("After changes  " + userOne.email);
//we saw that heap / non primitive types gives us the reference not a copy.

