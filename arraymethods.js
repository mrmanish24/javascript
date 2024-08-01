// forEach

const array = ["tom","jerry","ben","richi","popey"]

// array.forEach(element=> {
//     console.log(element.toUpperCase())
// });

// map --- create new array

const uppercasearray = array.map(Element=>{
    return Element.toUpperCase()
}
)

console.log(uppercasearray)