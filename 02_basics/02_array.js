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

console.log("SLiced Array ", sliceArray);

console.log("Original Array ", myArray);

const spliceArray = myArray.splice(1,  3);

console.log("Spliced Array ", spliceArray);

console.log("Original Array ", myArray);

//The slice will simply take a range and do not print the limit given
//Splice will print the limit as well plus it will manipulat the original array