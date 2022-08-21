let isAccountLocked = false
let userRole = 'user    '

if (isAccountLocked) {
    console.log('Account is locked.')
} else if (userRole === 'admin') {
    console.log('Welcome Admin')
} else {
    console.log('Welcome .....')
}


// Challenge area 

let temp = 25

// It is freezing outside!
if (temp <= 31) {
    console.log('It\'s freezing outside!')
// It is hot outside!
} else if (temp >= 110) {
    console.log('It\'s too hot outside!')
// Go for it, it's pretty nice.
} else {
    console.log('It\'s pretty nice outside.')
}