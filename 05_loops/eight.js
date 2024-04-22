//reduce methods

let myNums = [1, 2, 3];

// let myTotal = myNums.reduce(function (acc, curval){
//     console.log(`Accumalator value: ${acc} and cuurent value: ${curval}`);
//     return acc + curval;
// }, 0);

// let myTotal = myNums.reduce( (acc, cur) => acc + cur, 0);
// console.log(myTotal);

/*Things you should know
1: give an initial value to accumalator.
2:The accumalator and current value (which is coming from array) is added.
3:The added value is assigned to accumalator again for the next iteration
*/

let cart = [
    {
        itemName: "English",
        price:200,
        category:"literature",
    },
    {
        itemName: "Physics",
        price:600,
        category:"Laws",
    },
    {
        itemName: "Urdu",
        price:300,
        category:"literature",
    }
];


let myTotal = cart.reduce( (initialCharges, buyingPrice) => (initialCharges + buyingPrice.price), 0);
console.log(myTotal);