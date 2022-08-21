// Students score, total possible score
// 15/20 => You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59


const getStudentScore = function(studentScore, totalScore) {
    const percentage = studentScore / totalScore * 100
    let letterGrade = ''

    if (percentage >= 90) {
         letterGrade = 'A'
    } else if (percentage >= 80) {
         letterGrade = 'B'
    } else if (percentage >= 70) {
         letterGrade = 'C'
    } else if(percentage >= 60) {
         letterGrade = 'D'
    } else if(percentage <= 59) {
         letterGrade = 'F'
    }


    let gradeMessage = `You got a ${letterGrade} (${percentage}%)!`
    return gradeMessage
}


let hossam = getStudentScore(15, 20)
console.log(hossam)
