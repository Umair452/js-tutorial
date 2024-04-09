//Simple string concatenation
const name = "Umair";
const age = 24;

// console.log(name + age);

//Modern type of concatenation

// console.log(`My name is ${name} and my age is ${age}`); //known as string interpulation
//on the go we can call functions as well like toUppercase etc with variables in log


//Another way to define string 

let secondName = new String('Arshad');
//The above string will work as an object and gives us the key value pair
// i.e it defines a length to string and makes pair like 0:A , 1:r and so on 


//Now we can get key value pair for this string
// console.log(secondName[3]);


//Also you can access prototypes of it
// console.log(secondName.__proto__);
//proto keyword is not necessary its just a demonstration


// console.log(secondName.length);


// console.log(secondName.toUpperCase());

//Breaking string into parts

let newString = secondName.substring(0, 3); //3rd character is not included starting from 0
// console.log(newString);

//Using SLice as we can give negative values as well

let anotherString = secondName.slice(-5, 3);
// console.log(anotherString);
//Since we gave -5 it goes back and cuts the firs letter as the length is 6

//USING TRIM AND REPLACE

let newStringOne = "   Umair";
// console.log(newStringOne);

// console.log(newStringOne.trim()); //Removes spaces if any 
//ALso you can use trim start and trim end


//Replace

let myEmail = "Umairarshad@mail.com";
// console.log(myEmail);

// console.log(myEmail.replace("mail", "gmail"));
//We replaced the mistakes we dont want to get

// console.log(myEmail.includes("Umair"));
//We can check wether something is in the strings or not

console.log(myEmail.split("", 3));
//1st param is separater  on which basis string is separated and the second one is limit 



