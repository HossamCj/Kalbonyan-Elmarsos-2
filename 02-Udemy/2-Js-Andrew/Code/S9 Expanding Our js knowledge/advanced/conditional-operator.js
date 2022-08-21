// const age = 25

// const showPage = () => 'Showing the page'
// const showErrorPage = () => 'Showing the error page'
// const message = age >= 21 ? showPage() : showErrorPage()

// console.log(message)


// Challenge Area
const team = ['Hossam', 'Shady', 'Naima', 'Noo7', 'Safia', 'Omy Naima', 'Omy Amina']

const pass = () => `Team size: ${team.length}`
const error = () => 'Too many people in your team, Sorry!'

const message = team.length <= 4 ? pass() : error()
console.log(message)