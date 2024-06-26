const myArray = [0, 1, 2, 3, 4];
// console.log(myArray);


//Pushing into an array

// myArray.push(5);

// console.log(myArray);


//Removing from array the last added element

// myArray.pop();

// console.log(myArray);

//Pushing something at the start of array i.e at 0 index

// myArray.unshift(10);

// console.log(myArray);

//Removing the first element

// myArray.shift();

// console.log(myArray);

//JOINING array, it will convert the array type to string and stores it

const newArray = myArray.join();
// console.log(newArray);

//USING SLICE AND SPLICE



const sliceArray = myArray.slice(1, 3);

// console.log("SLiced Array ", sliceArray);

// console.log("Original Array ", myArray);

const spliceArray = myArray.splice(1,  3);

// console.log("Spliced Array ", spliceArray);

// console.log("Original Array ", myArray);

//The slice will simply take a range and do not print the limit given
//Splice will print the limit as well plus it will manipulat the original array


const heros = ["thor", "ironman", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];

// heros.push(dcHeros);
//but this will make it like array in an array
// console.log(heroes);

//Use concat to make one array from 2 arrays

const allHeros = heros.concat(dcHeros);
// console.log(allHeros);

//or you can use spread method to combine more than two arrays

const newHeros = [...heros, ...dcHeros];
// console.log(newHeros);


//Solving a nested array
const nestedArray = [1, 2, 3, [4, 5, 6], 7, 8, 9, [10, [11,12]]];

const simpleArray = nestedArray.flat(3); //you can give infinity as well to depth parameter

// console.log(simpleArray);

//Converting other types into array

const name = "Umair";

// console.log(Array.from(name));

//Now combining multiple variable into array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
