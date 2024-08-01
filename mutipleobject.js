// creating multiple Object

// function createuser(name, age, email){
//     const user = {};

//     user.name = name;
//     user.age = age;
//     user.email = email;

//     // user.is18 = function(){     ------> lets improve this
//     //    return this.age>18
//     // }

// return user
// }

// const user1 = createuser("manish",24,"heymanishthakur@gmail.com")

// console.log(user1)

// console.log(user1.is18())


// const usermethods = {
//     is18 : function(){
//         return this.age>18
//     }
// }

// function createuser(name, age, email){
//     const user = {};

//     user.name = name;
//     user.age = age;
//     user.email = email;

//     user.is18 = usermethods.is18

// return user
// }

// const user1 = createuser("manish",24,"heymanishthakur@gmail.com")

// console.log(user1)

// console.log(user1.is18())



// function createuser(name, age, email){
//     const user = Object.create(usermethods)
//     user.name = name;
//     user.age = age;
//     user.email = email;

// return user
// }

// const user1 = createuser("manish",24,"heymanishthakur@gmail.com")

// console.log(user1)

// console.log(user1.is18())

// console.log(user1.__proto__)


function createuser(firstname, age , email, address){
    user = Object.create(createuser.prototype)

    user.firstname = firstname
    user.age = age
    user.email = email
    user.address = address

    return user
}

createuser.prototype.about = function(){
    return `user name is ${this.name} and age ${this.age} email : ${this.email}`
}

createuser.prototype.is18 = function(){
    return  this.age>18? "yes": "NO";
}

const user1 = createuser("Manish",24, "heymaishthakur@gmail.com","sagar" )

console.log(user1)

console.log(user1.__proto__)

console.log(user1.is18())