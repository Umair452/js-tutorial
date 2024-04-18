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

console.log(loginUserMessage());

