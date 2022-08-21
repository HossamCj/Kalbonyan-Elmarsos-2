const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}
const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)
}

const getCountry = async (country) => {
    const response = await fetch('//restcountries.com/v3.1/all')

    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Unable to fetch country')
    }
}
const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=15e23c8d8db1cc')

    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch location')
    }
}