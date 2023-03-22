<<<<<<< Updated upstream
let database = {
    classes: [],
    questions: []
}

const getRandomNumber = () => {
    return `${Math.floor(Math.random() * 900000) + 100000}`
}
=======
const database = {
    classes : [],
    questions: []
}

// const getRandomNumber = () => {
//     return `${Math.floor(Math.random()*900000) + 100000}`
// }
>>>>>>> Stashed changes

export const createClass = (className) => {
    database.classes.push({
        className: className
    })
}
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
export const getClasses = () => {
    return database.classes
}

export const createClassSession = className => {
<<<<<<< Updated upstream
    // find the class with the class name
=======
    // need to find the class with the class name
>>>>>>> Stashed changes
    const classInfo = database.classes.find(classInfo => {
        return classInfo.className === className
    })

    classInfo.sessions = []
<<<<<<< Updated upstream
    classInfo.sessions.push(getRandomNumber())
}

export const getClassSessions = className => {
    // find the class with the class name
=======
    // classInfo.sessions.push(getRandomNumber())
    classInfo.sessions.push('123456')
}

export const getClassSessions = className => {
    // need to find the class with the class name
>>>>>>> Stashed changes
    const classInfo = database.classes.find(classInfo => {
        return classInfo.className === className
    })
    return classInfo.sessions;
}

export const askQuestion = (name, question, classSession) => {
    database.questions.push({
        name: name,
        question: question,
        classSession: classSession
    })
}

export const getQuestions = (classSession) => {
    // find the question for a class session
    return database.questions.filter(question => {
        return question.classSession === classSession
    });
}

export const clear = () => {
    database = {
        classes: [],
        questions: []
    }
}
<<<<<<< Updated upstream
=======

// export is a way of exporting something out of the file
// const helloWorld = 'helloWorld'
// export default helloWorld;
// note - can only have one default value
>>>>>>> Stashed changes
