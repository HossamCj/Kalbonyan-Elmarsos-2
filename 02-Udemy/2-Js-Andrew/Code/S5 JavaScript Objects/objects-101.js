let myBook = {
    title: '40 Nawawy Hadeeth',
    author: 'Mohamed Saleh El Monajed',
    pageCount: 704
}

console.log(`${myBook.title} by ${myBook.author}`)

// Change myBook.title
myBook.title = 'Explanation of The Forty Nawawy Hadith'
console.log(`${myBook.title} by ${myBook.author}`)


// Challange area
// Result expected: Abo Safia is 25 lives in Cairo.
let personInfo = {
    name: 'Abo Safia',
    age: 25,
    location: 'Cairo',
}

console.log(`${personInfo.name} is ${personInfo.age} lives in ${personInfo.location}.`)

// Increase the age by 1 and print message again
personInfo.age += 1

console.log(`${personInfo.name} is ${personInfo.age} years old, lives in ${personInfo.location}.`)