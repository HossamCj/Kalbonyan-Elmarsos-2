// Premitive value: string boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype -- null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null


const puzzleElement = document.querySelector('#puzzle')
const guessesElement = document.querySelector('#guesses')
const game1 = new Hangman('o b t Islam', 3)

puzzleElement.textContent = game1.puzzle
guessesElement.textContent = game1.statusMessage

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    puzzleElement.textContent = game1.puzzle
    guessesElement.textContent = game1.statusMessage
})