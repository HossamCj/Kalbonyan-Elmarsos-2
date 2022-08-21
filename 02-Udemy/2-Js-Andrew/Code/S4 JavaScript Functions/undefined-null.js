// Undefined for variable
let name 
// name = 'Hossam'

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}


// Undefined for function arguments
// Undefined for function return default value
let func = function(num) {
    console.log(num)
}

let funcResult = func() // Undefined here for defining without giving it a value 

console.log(funcResult) // Udefined for printing the 
// Null as assigned value 

let age = null

console.log(age)