//DATES

let myDate = new Date();
//Date is an object
// console.log(myDate.toJSON());
//You can use different methods to show the date in different format

//Create a specific date

// let createdDate = new Date(2020, 0, 14); //months start from 0 in js
// console.log(createdDate.toDateString());

let createdDate = new Date(2020, 0, 14, 4, 52);
// console.log(createdDate.toLocaleString());

let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(createdDate.getTime());

//Converting to seconds

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);

//Extracting month or day from date

// console.log(newDate.getMonth());

//Interesting method

newDate.toLocaleString('default', {
    weekday: "long"
})

//So its a basic example of customizing and getting more detailed dates
