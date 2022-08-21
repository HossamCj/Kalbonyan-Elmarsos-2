// Challenge area

// Convert fahrenheit to celsius
let calsiusConvertor = function (fahrTemp) {
    let convertor = (fahrTemp - 32) * 5 / 9
    return convertor
}

// Call a couple of times (32 -> 0) (68 -> 20
let _32_value = calsiusConvertor(32)
let _68_value = calsiusConvertor(68)

// Print the converted values
console.log(_32_value)
console.log(_68_value)
