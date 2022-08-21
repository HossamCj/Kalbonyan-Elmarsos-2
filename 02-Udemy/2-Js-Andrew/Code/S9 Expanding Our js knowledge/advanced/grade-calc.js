const gradeCalc = (score, totalScore) => {
    if (typeof score !== 'number' || typeof totalScore !== 'number') {
        throw Error('Please provide numbers only')
    }

    const precent = (score / totalScore) * 100
    let letterGrade = ''

    if (precent >= 90) {
        letterGrade = 'A'
    } else if (precent >= 80) {
        letterGrade = 'B'
    } else if (precent >= 70) {
        letterGrade = 'C'
    } else if (precent >= 60) {
        letterGrade = 'D'
    } else {
        letterGrade = 'F'
    }

    return `You got a ${letterGrade} (${precent}%)`
}

try {
    const result = gradeCalc(9, 60)
    console.log(result)
} catch (e) {
    console.log(e.message)
}