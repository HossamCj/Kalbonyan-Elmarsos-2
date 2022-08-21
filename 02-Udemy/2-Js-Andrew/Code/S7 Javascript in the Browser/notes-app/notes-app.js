let notes = getSavedNotes()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters)

document.querySelector('#add-note').addEventListener('click', function (e) {
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
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})  

document.querySelector('#filter-by').addEventListener('change', function (e) {
    filters.sortBy = e.target.value
    renderNotes(notes, filters)
})

window.addEventListener('storage', function (e) {
    notes = JSON.parse(e.newValue)
    renderNotes(notes, filters)
})

// const now = moment()
// now.add(3, 'year').subtract(20, 'year')

// console.log(now.format('MMMM Do, YYYY'))

// const nowTimestamp = now.valueOf()
// console.log(moment(nowTimestamp).toString())

const birthday = moment()
birthday.year(1997).month(2).date(9)

console.log(birthday.format('MMM D, YYYY'))