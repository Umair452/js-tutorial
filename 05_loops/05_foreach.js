//for each

let myArray = ["js", "ruby", "java"];

//for each is a callback function and it is bt built in a prototype of array
//use it with the array

myArray.forEach( function (index) {
    // console.log(index);
} )

//since you are in the array so it will handle param as an array index

//ANother variation with arrow function

myArray.forEach( (index) => {
    // console.log(index);
})

//another way you can write function outside and just name it inside dont call it just name

function languages (index){
    // console.log(index);

}

//now just write it inside the for each

// myArray.forEach(languages);

//for each has the value at index, the index and complete array access at each index

myArray.forEach( (value, index, fullArray)=> {
    // console.log(value, index, fullArray);
} )

let arrayTwo = [
    {
        langName: "Javascript",
        abbreviation: "JS",
    },
    {
        langName: "Java",
        abbreviation: "JV",
    },
    {
        langName: "C Plus Plus",
        abbreviation: "CPP",
    },
];



arrayTwo.forEach( (item) => {
        console.log(item.abbreviation);
} )