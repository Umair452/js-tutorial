//SIngleton(apni trh ka aik hi object created from constructors)

//object literals

//symbol declaration 

const mySymbol = Symbol("key1"); 


const userData = {
    name: "Umair",
    "full name":"Umair Arshad",
    age: 24,
    location: "Lalamusa",
    [mySymbol]:"data changed", //this is a symbol 

}

//Two ways to access the keys and its values inside of object
//1: console.log(userData.name);
//2: console.log(userData["name"]); this one comes in handy in the following case, this one is best way

// console.log(userData["full name"]);

//changing values in an object

userData.name = "Muhammad";

// console.log(userData["name"]);

//freezing a key to lock and can't be changed 

// Object.freeze(userData);

//Defining a greeting function for an object but unfreeze it because its locked

userData.greeting = function(){
    console.log("Hello New User");
}



//accessing a key in a function
userData.access = function(){
    console.log(`I accessed my name, ${this["full name"]}`); //this will reference to same obj
}

console.log(userData.greeting());
console.log(userData.access());
