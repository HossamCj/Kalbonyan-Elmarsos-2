let temp = 31

// Logical And Operator (&&) - True if both sides are true, False otherwise.
// Logical Or operator (||) - True if at least one side is true, False otherwise.

if (temp >= 60 && temp <= 90) {
    console.log('It\'s pretty nice outside.')
} else if (temp >= 120 || temp <=30) {
    console.log('Don\'t go outside, we don\'t recooment that at all!')
} else {
    console.log('Eh..It\'s up to you!')
}


// Challenge area

let isGuestOneVegan = false
let isGuestTwoVegan = false

// Are both guests vegan? Only offer up vegan dishes.
if (isGuestTwoVegan) {
    console.log('Only offering vegan dishes')
// If one of the guests vegan? Make sure to offer vegan options.
} else if (isGuestOneVegan) {
    console.log('Offering vegan options')
// Else, Offer up anything on the menue
} else {
    console.log('Offering anything on the menue')
}