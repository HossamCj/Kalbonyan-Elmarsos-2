// Fetch existing todos from localStorage
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')

    try {
        return todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        return [] 
    }
}

// Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Remove todo from the list
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
    
}

// Toggel the completed value for given todo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id )

    if (todo) {
        todo.completed = !todo.completed
    }
    
    
}

// Render application todos based on filters
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        // debugger
        return searchTextMatch && hideCompletedMatch
    })

    const incompletedTodos = filteredTodos.filter((todo) => {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generatedSummaryDOM(incompletedTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))

    })
}

// Get the DOM elements for an individual todo
const generateTodoDOM = (todo) => {
    const todoElement = document.createElement('div')
    const checkTodoElement = document.createElement('input')
    const todoTextElement = document.createElement('span')
    const removeTodoButton = document.createElement('button')

    // Setup todo checkbox
    checkTodoElement.setAttribute('type', 'checkbox')
    checkTodoElement.checked = todo.completed
    todoElement.appendChild(checkTodoElement)
    checkTodoElement.addEventListener('change', () => {
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
    removeTodoButton.addEventListener('click', () => {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })
    return todoElement
}

// Get the DOM elements for the list summary
const generatedSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}