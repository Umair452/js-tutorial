// let userEmail = "umair@gmail.com";

// if (userEmail){
//     console.log("Got Email");
// }

// else{
//     console.log("Don't Have Email");
// }

/*Falsy values
false, 0, -0, Bigin 0n, "", null, undefined, NAN. Other all values are considered as truthy
Empty functions also truthy 
*/

//Empty array check

// let emptyArray = [];

// if(emptyArray.length === 0){
//     console.log("Array is empty");
// }

//Empty object check

// let emptyObject = {};

// if(Object.keys(emptyObject).length === 0){
//     console.log("Object is empty");
// }

//Nullish Coalescing Operator (??): it works on null and undefined

// let val1;
// val1 = undefined ?? 10;
// console.log(val1);

//It checks if two values are coming and one is null or undefined then it initializes the other value

//If more than 2 values are coming then it will assign the first non-null or defined value

// let name;
// name = null ?? "Umair" ?? "Muhammad Umair";
// console.log(name);

//Ternary operator

//condition ? true : flase

// let myName = "Umair";

// myName === "Umair" ? console.log(`Name Found: ${myName}`) : console.log("Name not found");

