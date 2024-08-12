const user = {
    name: 'Umair',
    mail: 'umair@gmail.com',
    phone: '030000000',
    details: function (){
        // console.log(this.name);
        // console.log(this);
        
        
    }
}

// console.log(user.details());


//////////constructor Function//////////////

function userDetails(name, loginCount, mail){
    this.name = name;
    this.count = loginCount;
    this.mail = mail;

    return this
}

const userOne = new userDetails('Umair', 4, 'umair@gmail.com')

const userTwo = new userDetails('Talha', 3, 'talha@gmail.com')

//it is over writing so use new keyword
console.log(userOne);
console.log(userTwo);

//1:new creates an empty object which is an instance
//2: a constructor function is called and it wraps all the arguments in a pack
//3: this keyword injects those in function and then returns



