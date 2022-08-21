let todos = getSavedTodos()

// Filter setup
const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters)

// Search and filter for todo text
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

// Add new todo 
document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    todos.push({
        id: uuidv4(),
        text: e.target.elements.text.value,
        completed: false
    })

    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.text.value = ''
})

// Setup the hide-completed todos option
document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})