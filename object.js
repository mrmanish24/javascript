// Object.keys - array

function about(hobby,music){
    console.log(`my name is ${this.name} age ${this.age} and i love to ${hobby} and listen to ${music} `)
}


const user1 = {
    name : "manish",
    age : 24
}

const user2 = {
    name :"andrew",
    age : 22
}

about.apply(user1,["play guitar", "songs"])