let myAccount = {
    name: 'Hossam',
    income: 0,
    expenses: 0,
    balance: 0,
}

// project requirements


// addIncome()
let addIncome = function(account, amount) {
    account.income += amount
    account.balance = account.income

    return account
}

// addExpense()
let addExpense = function (account, amount) {
    account.expenses += amount
    account.balance -= account.expenses

    // return account
}

// resetAccount()
let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
    account.balance = 0

    // return account

}

// getAccountSummary()
// As an example: Account for Hossam has $200000 in his balance, $210000 in income and $1000 in expenses.
let getAccountSummary = function (account) {
    let summaryText =   `Account for ${account.name} has $${account.balance} in his balance, $${account.income} in income and $${account.expenses} in expenses.`
    return summaryText
}


// addIncome()
let accountIncome = addIncome(myAccount, 21000)

// addExpense()
let accountExpense = addExpense(myAccount, 1000)

// getAccountSummary()
let accountSummary = getAccountSummary(myAccount)
console.log(accountSummary)

// resetAccount()
let accountReset = resetAccount(myAccount)

// getAccountSummary()
accountSummary = getAccountSummary(myAccount)
console.log(accountSummary)

addIncome(myAccount, 600)
addExpense(myAccount, 200)

console.log(getAccountSummary(myAccount))