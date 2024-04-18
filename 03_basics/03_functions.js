//basic functionn syntax

function myFunction (){
    console.log("Hello");
    console.log("My");
    console.log("Function");
}

// myFunction();

// function myMath(num1, num2){
//     console.log(num1 + num2);
// }

// myMath(2, 3);

function myMath(num1, num2){
    
    return num1 + num2;
}

let result = myMath(3, 5);
// console.log(result);

//Passed a default value 
function loginUserMessage (username = "Muhammad Umair"){
    return `${username} Just Logged In`;
}

// console.log(loginUserMessage());

//function with unlimited returns like add to cart


//using rest / spread operator in parameter
function addToCart (...num1){
    return num1;
}

// console.log(addToCart(100,200,300,400));

// const product = {
//     name:"Tea",
//     price: 250,
// }

function objectHandling(anyObject){
        console.log(`Product name is ${anyObject.name} and price is ${anyObject.price}`);
}

// objectHandling(product);
//Passing object directly to function
objectHandling({
    name:"Tea",
    price: 250,
});

function returnThirdValue(anyArray){
    return anyArray[2];
}

// console.log(returnThirdValue([1,2,4,4])); just like object passing