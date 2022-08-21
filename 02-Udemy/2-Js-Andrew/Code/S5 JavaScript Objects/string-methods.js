let name = '    Hossam Abo Nooh'

// Length property
console.log(name.length)

// Convert to upper case
console.log(name.toUpperCase())

// Convert to lower case
console.log(name.toLowerCase())

// Includes method
let password = 'اتثجpasswordكلمة'
console.log(password.includes('كلمة'))

// Trim method
console.log(name.trim())


// Challenge area
console.log('//  Challenge Area')
// isVaildPassword()
// Length is more than 8, and it doesn't contain the word password


let isValidPassword = function(password) {
    let failMessage = ''

    if (password.includes('password') || password.length <= 8) {

        failMessage = 'Fail'

    } else {
        failMessage = 'Pass'
    }

    return failMessage
}

console.log(isValidPassword('asdfv')) // Fail
console.log(isValidPassword('8883kfaf/%^')) // Pass
console.log(isValidPassword('asfia221password')) // Fail


// Another way for solve the challenge
console.log('//   Another way for solve the challenge')

let isValidPass = function(password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPass('asfas')) // False
console.log(isValidPass('asfasf2323//')) // True
console.log(isValidPass('asfasfpassword12/')) // False