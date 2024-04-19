const user = {
    username: "Umair",
    price: 100,
    welcomeMessage: function (){

        //This keyword will refer to current context in which it is used

        console.log(`${this.username}, Welcome To Website`);

        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "Umair Arshad";
// user.welcomeMessage();

// console.log(this);

//Browser throws window as a context global scope, but node will give us empty object


// ++++++++++++++++Arrow function ++++++++++++++++++++++++

// function myFUnction(){
//     let age = 24;
//     console.log(this.age);
// }

// myFUnction();  Unable to use "this" in function but it is used in object

// const myFUnction = function (){
//         let age = 24;
//         console.log(this.age);
//     }
    
    // myFUnction();  This wont work either

// const arrowFunction = ()=>{
//     let age = 24;
//     console.log(this);
// }

// arrowFunction(); 

/*arrow functions with loging "this" will give us an empty object
instead of giving details like a normal function if logged with "this"
but it is still undefined if it calls like  this.age

*/ 

// const sum = (num1, num2)=>{
//     return num1 + num2;
// }

// console.log(sum(5, 4)); Basic arrow function

//Implicit return (no curly braces reuired to return anything)

//Line no 61 and 62 works the same but use () for object returning line 63 so it is better practice
// const sum = (num1, num2) => num1 + num2;
// const sum = (num1, num2) => (num1 + num2);
// const sum = () => ({username: "Umair"});

// console.log(sum());
// console.log(sum(5, 4));
