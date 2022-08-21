let myBook = {
    title: 'How He Treated Them',
    author: 'Mohamed Saleh Al-Monajjid',
    pageCount: 789,
}

let otherBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326,
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}.`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let bookSummary1 = getSummary(myBook)
let bookSummary2 = getSummary(otherBook)

console.log(bookSummary1.pageCountSummary)


// Challenge area
// Create a function - take fahrenheit in 
// return object with all three

let tempConvertor = function (fahrTemp) {
    let celsiusConvertor = (fahrTemp - 32) * 5 / 9
    let kelvinConvertor = celsiusConvertor + 273.15

    return {
        celsius: `The Celsius temp is ${celsiusConvertor} .`,
        kelvin: `The Kelvin temp is ${kelvinConvertor} .`,
        fahrenheit: `The Fahrnheit temp is ${fahrTemp} .`
    }
}

let _32_fahr = tempConvertor(32)

console.log(_32_fahr.kelvin)