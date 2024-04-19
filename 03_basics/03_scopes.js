//var is global scope
//let and const is block  scope


if(true){
    var a = 10;
    let b = 20;
    const c = 30;
}

// console.log(c);
// console.log(b);
// console.log(a);

function one (){

    const username = "Umair";
    function two (){
        const website = "Youtube";
        console.log(username);
    }

    // console.log(website);
    // two();
}
// one();

//Child functions can access parent's variables

//+++++++++++++++ interesting info +++++++++++++++++


// console.log(addOne(5)); This won't thrwo any error
function addOne (num){
    return num + 1;
}

// console.log(addTwo(5)); This will throw an error because of hoisting
const addTwo = function (num){
    return num + 2;
}

