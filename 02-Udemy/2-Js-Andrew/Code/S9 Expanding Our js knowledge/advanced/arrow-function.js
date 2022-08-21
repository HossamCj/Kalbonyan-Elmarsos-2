const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(squareLong(5))

const people = [{
    name: 'Hossam',
    age: 25
}, {
    name: 'Shady',
    age: 22
}, {
    name: 'نوح',
    age: 7
}]


// const under30 = people.filter(function (person) {
//     return person.age < 30
// })

const under30 = people.filter((person) => person.age < 30)

console.log(under30)

// Challenge area 
const person = people.find((person) => person.age === 22)
console.log(person.name)