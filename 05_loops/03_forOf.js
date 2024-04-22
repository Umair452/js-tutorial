//for of

//array with objects

//[{}, {}, {}]

// let myArray  = [1, 2, 3, 4, 5];

// for (const index of myArray) {
//     console.log(`Values in array ${index}`);
// }

// let greetings = "Hello World";

// for (const iterator of greetings) {

//     console.log(`Each letter of greeting ${iterator}`);
    
// }

//MAPS used for unique values but works like an object, duplicate values are ignored

let map = new Map();

map.set("Key1", "Value one for key1");
map.set("Key2", "Value one for key2");
map.set("Key3", "Value one for key3");
map.set("Key1", "Value one for key1")

// console.log(map);

//Prinitng with for of loop

// for (const key of map) {
//     console.log(key);
// }

//Destructure array for getting separated values

// for (const [key, value] of map) {
//     console.log(`${key} : ${value}`);
// }


//Iterating in object..

// let myObject={
//     gameOne: "NFS",
//     gameTwo: "Spiderman",
// }

// for (const key of myObject) {

//     console.log(key);
    
// }

//Simple objects are not iteratable