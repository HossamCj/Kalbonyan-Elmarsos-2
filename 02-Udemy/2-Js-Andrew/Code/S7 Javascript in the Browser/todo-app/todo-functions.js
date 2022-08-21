// Fetch existing todos from localStorage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove todo from the list
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
    
}

// Toggel the completed value for given todo
const toggleTodo = function (id) {
    const todo = todos.find(function (todo) {
        return todo.id === id
    })

    if (todo !== undefined) {
        todo.completed = !todo.completed
    }
    
}

// Render application todos based on filters
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        // debugger
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))

    })
}

// Get the DOM elements for an individual todo
const generateTodoDOM = function (todo) {
    const todoElement = document.createElement('div')
    const checkTodoElement = document.createElement('input')
    const todoTextElement = document.createElement('span')
    const removeTodoButton = document.createElement('button')

    // Setup todo checkbox
    checkTodoElement.setAttribute('type', 'checkbox')
    checkTodoElement.checked = todo.completed
    todoElement.appendChild(checkTodoElement)
    checkTodoElement.addEventListener('change', function () {
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    // Setup the todo text
    todoTextElement.textContent = todo.text
    todoElement.appendChild(todoTextElement)

    // Setup the remove button
    removeTodoButton.textContent = 'x'
    todoElement.appendChild(removeTodoButton)
    removeTodoButton.addEventListener('click', function () {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    return todoElement
}

// Get the DOM elements for the list summary
const genereateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}