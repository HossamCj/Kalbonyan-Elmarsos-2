const Person = props => {
    return React.createElement('div', {}, [
        React.createElement('h1', {key: 2}, props.name),
        React.createElement('p', {key: 3}, props.occupation)
    ])
}

const App = () => {
    return React.createElement('div', {}, [
        React.createElement(
            'h1',
            { className: 'title', key: 4 },
            "React is rendered"
        ),
        React.createElement(
            Person,
            {name: 'Cj', occupation: 'Software Engineer', key: 5},
            null
        ),
        React.createElement(
            Person,
            {name: 'Na3ima', occupation: 'Quran Instructor', key: 6},
            null
        ),
        React.createElement(
            Person,
            {name: 'Noo7', occupation: 'Scholar in Quran, Tafseer, fiqh and hadith', key: 7},
             null
        ),
        React.createElement(
            Person,
            {name: 'Safia', occupation: 'Quran and hadith instructor', key: 8},
            null
        )
    ])
}


const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(React.createElement(App))
