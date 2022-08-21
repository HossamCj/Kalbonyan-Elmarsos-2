const account = {
    name: 'Hossam',
    expenses: [],
    income: [],

    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },

    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount,
        })
    },

    getAccountSummary: function () {
        let totalExpenses = 0
        let totalIncome = 0
        let balance = 0

        this.expenses.forEach(function (expense) {
            totalExpenses += expense.amount
        })

        this.income.forEach(function (income) {
            totalIncome += income.amount
        })
        
        balance = totalIncome - totalExpenses
        let message = `${this.name} has a balance of $${balance}, $${totalIncome} in, and $${totalExpenses}.`

        return message
    }
}

// 1. Add income array to account
// 2. addIncome() method has (description, amount)
// 3. Tweack getAccountSummary(), Show (income - expenses - balance)

account.addExpense('Coffee', 2)
account.addExpense('Gase', 20)
account.addExpense('Light Bill', 50)

account.addIncome('Job', 10000)


console.log(account.getAccountSummary())