let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map( (num) => num + 10);
// console.log(newNums);

//addded ten to every index of array

//doing it with for each

// const newNums = [];
// myNums.forEach( (num) => newNums.push (num + 10));
// console.log(newNums);

//Chaining , using two or more than two nethods directly

const newNums = myNums.map( (num) => num + 1).filter( (num) => num > 5);
// console.log(newNums);

//first it will return the mapped numbers to filters and then filters will return it