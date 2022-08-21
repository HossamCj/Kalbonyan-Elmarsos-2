const todoList = []

// Add todoList
const addTodo = function (todoList, todo) {
    todoList.push(todo)
}

// Delete todoList
const deleteTodo = function (todoList, todoTitle) {
    const index = todoList.findIndex(function (todo) {
        return todo.title.toLowerCase() === todoTitle.toLowerCase()
    })

    if (index > -1) {
        todoList.splice(index, 1)
    }
}

addTodo(todoList, {
    title: 'Read Book 1',
    completed: true
})
addTodo(todoList, {
    title: 'Read zad book 1',
    completed: true
})
addTodo(todoList, {
    title: '30 minutes of exercise',
    completed: false
})
deleteTodo(todoList, 'Read book 1')
addTodo(todoList, {
    'title': 'Ready with the family and hangout with them',
    completed: false,
})
// console.log(todoList)

// getThingsTodo() Challenge
const getThingsTodo = function (todoList) {
    return todoList.filter(function (todo) {
        return !todo.completed
    })
}
// console.log(getThingsTodo(todoList))


// Sort array for todo challenge:
const sortTodo = function (todoList) {
    todoList.sort(function (a, b) {
        if (a.completed < b.completed) {
            return -1
        } else if (b.completed < a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

// Another way for sorting
const sortTodo2 = function (todoList) {
    todoList.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

console.log('Before sorting todo list')
console.log(todoList)

sortTodo2(todoList)
console.log('After sorting todo list')
console.log(todoList)