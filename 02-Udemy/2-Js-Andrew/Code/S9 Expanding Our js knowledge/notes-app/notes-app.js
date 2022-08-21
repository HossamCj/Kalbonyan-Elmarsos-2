'use strict'

let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#add-note').addEventListener('click', (e) => {
    const id = uuidv4()
    const timesTamp = moment().valueOf()

    notes.push({
        id: id,
        title: '',
        body: '',
        createdAt: timesTamp,
        updatedAt: timesTamp,
    })
    
    saveNotes(notes)
    location.assign(`edit-note.html#${id}`)
})

// Add filter for search text
document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})  

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', (e) => {
    notes = JSON.parse(e.newValue)
    renderNotes(notes, filters)
})