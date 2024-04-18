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

// console.log(userData.greeting());
// console.log(userData.access());

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//OBJECT DESTRUCTURING

const course = {
    name:"JavaScript",
    price:"1000",
    courseInstructor:"Hitesh",
}

const {courseInstructor: teacher} = course;

// console.log(teacher);
 //Now we can use teacher instead of long name

//API may occur in json or in array format to handle
