// Multiple arguemnts
// let sum = function(a, b, c) {
//     return a + b + c
// }

// let sumResult = sum(2, 2, 2)
// console.log(sumResult)


// Defualt arguments value
let getScoreDetail = function(name = 'Anonymous', score = 0) {
    message = 'Name: ' + name + ', Score: ' + score
    return message
}

let score1 = getScoreDetail(undefined, 100)

console.log(score1)


// Challenge area
// Total, tip precent .2

// Template strings challenge, Example: A 25% top on $40 would be $10
let getTip = function (total, tipPrecent = 0.25) {
    let calcTip = total * tipPrecent
    let precentage = tipPrecent * 100
    let tipMessage = `A ${precentage}% top on $${total} would be $${calcTip}`
    return tipMessage
}

let tip = getTip(100)
console.log(tip)

// Add new tip precentage
let newTip = getTip(100, .30)
console.log(newTip)