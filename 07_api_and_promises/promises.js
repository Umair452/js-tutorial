//Promise creation

const promiseOne = new Promise(function (resolve,reject){
    //Do an async task
    //DB calls, cryptography
    setTimeout(function(){
        // console.log('Async task is complete');
        resolve()//connects then with resolve see below
    },1000)
})


//Promise consumption

promiseOne.then(function(){
    // console.log('Promise consumed');
})


const promiseTwo =  new Promise(function (resolve,reject){
    setTimeout(function(){
        // console.log('Second Async is completed');
        resolve()
    },1000)
}).then(function(){
    // console.log('Async two resolved');
})

const thirdPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName: "Umair", email:"example@gmail.com"}) //passing the data 
    },1000)
})

thirdPromise.then(function(user){
// console.log(user);
})


const fourthPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
       let error = false //this is used to see error is there or not
       if(!error){
        resolve({userName: "Umair", email: "email@example.com"})
       } 
       else{
        reject('ERROR: SOMETHING WENT WRONG')
       }
    },1000)
})


//how to do chaining of then to get values, keep in mid to use catch because we are also handling rejections as well
fourthPromise.then((user)=>{
// console.log(user);
return user.userName
})
.then((userName)=>{
    // console.log(userName);
})
.catch((error)=>{
    // console.log(error);
})
// .finally(()=> console.log('Promise is either resolved or rejected'))

//finally used to know wether task is performed or rejected




//using async await instead of then and catch
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false //this is used to see error is there or not
        if(!error){
         resolve({userName: "Umair", password: "123456"})
        } 
        else{
         reject('ERROR: SOMETHING WENT WRONG IN JS')
        }
     },1000)
})


async function consumePromiseFive(){
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);
    }
    
}

consumePromiseFive()



// async function getAllUsers(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log('E:', error);
//    }
// }
// getAllUsers()


//same above thing with then and catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
console.log(data);
})
.catch(()=> console.log(error))

//Why fetch is working first and timeout working later