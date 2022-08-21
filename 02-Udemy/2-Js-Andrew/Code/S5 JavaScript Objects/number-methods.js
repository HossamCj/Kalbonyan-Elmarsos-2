let number = 119.9900

console.log(number.toFixed(2))

console.log(Math.round(number))
console.log(Math.floor(number)) // Give you the most low expected precentage
console.log(Math.ceil(number)) // Give you the most heigh expecetd precentage

// Random method
let min = 10
let max = 20
let randomNumber = Math.floor(Math.random() * (max - min + 1))

console.log(randomNumber)


// Challenge area
// 1 - 5 / True if correct guesst, False if wrong guess.

let makeGuess = function (guess) {
    let min = 1
    let max = 5
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) 
    
    if (guess == randomNumber) {
        return true
    } else {
        return false
    }

    // Or 

    // return guess === randomNumber
}

console.log(makeGuess(5))
console.log(makeGuess(1))
console.log(makeGuess(2))
console.log(makeGuess(3))
console.log(makeGuess(4))
