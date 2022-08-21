// Global scope (calsiusConvertor, _32_value, _68_value)
    // Local scope (fahrTemp, convertor)
        // Local scope(isFreezing)

let calsiusConvertor = function (fahrTemp) {
    let convertor = (fahrTemp - 32) * 5 / 9

    if (convertor <= 0) {
        let isFreezing = true
    }
    
    return convertor
}

let _32_value = calsiusConvertor(32)
let _68_value = calsiusConvertor(68)

console.log(_32_value) // Results should be 0
console.log(_68_value) // Results should be 20