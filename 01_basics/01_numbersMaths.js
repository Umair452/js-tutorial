const score = 200;
//Explicitly defining number type
const balance = new Number(200);
//You can convert this number to string and then apply string prototypes on it


// console.log(balance.toString().length);

const hundreds = 10000000;

// console.log(hundreds.toLocaleString()); //locale string will put commas to read the zeros easily


//+++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++//

//functions like absolute, round, math.min , math.max, math.random etc  
/* TRick to get a value between a range

Math.floor(Math.random(generating random 0-1)*(max - min + 1 avoiding 0 here)) + min
console log above and you will get a random number between a range
*/