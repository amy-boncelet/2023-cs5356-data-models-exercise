import * as db from './index.js'
// or can write import {getQuestions} from './index.js'
// second line only grabs the {getQuestions} function
// while first line, * would get everything from the file. it all gets dumped into object called db

// or can also write import anything from './index.js' (anything can be any word)
// this will export a default export statement


describe('class questions app', () => {
<<<<<<< Updated upstream
=======
    
>>>>>>> Stashed changes
    afterEach(() => {
        db.clear();
    })

<<<<<<< Updated upstream
    describe('Classes', () => {
        it('creates a class', () => {
            const className = 'CS 5356'
            db.createClass(className)
    
            const classes = db.getClasses()
            expect(classes.length).toEqual(1)
            expect(classes[0]).toEqual({className: 'CS 5356'})
        })
    
        it('creates a class session for a class', () => {
            const className = 'CS 5356'
            db.createClass(className)
    
            db.createClassSession(className)
    
            const classSessions = db.getClassSessions(className)
            expect(classSessions.length).toEqual(1)
        })    
=======
    it('creates a class', () => {
        const className = 'CS 5356'
        db.createClass(className)

        const classes = db.getClasses()
        expect(classes.length).toEqual(1)
        expect(classes[0]).toEqual({className: 'CS 5356'})
    })

    it('creates a class session for a class', () => {
        const className = 'CS 5356'
        db.createClass(className)

        db.createClassSession(className)

        const classSessions = db.getClassSessions(className)
        expect(classSessions.length).toEqual(1)
>>>>>>> Stashed changes
    })

    it('asks a question', () => {
        const className = 'CS 5356'
        db.createClass(className)

        db.createClassSession(className)
        db.createClassSession(className)
        const classSessions = db.getClassSessions(className)

        let name = 'user123'
<<<<<<< Updated upstream
        let question = 'Why is the sky blue?'
=======
        let question = 'why is the sky blue?'
>>>>>>> Stashed changes
        let classSession = classSessions[0]
        db.askQuestion(name, question, classSession)

        name = 'user456'
<<<<<<< Updated upstream
        question = 'A very random question'
        classSession = classSessions[1]
        db.askQuestion(name, question, classSession)

        const questions = db.getQuestions(classSessions[0])
        expect(questions.length).toEqual(1)
        expect(questions[0].question).toEqual('Why is the sky blue?')
=======
        question = 'what time is it?'
        classSession = classSessions[1]
        db.askQuestion(name, question, classSession)

        const questions = db.getQuestions(classSession[0])
        expect(questions.length).toEqual(1)
        expect(questions[0].question).toEqual('why is the sky blue?')
>>>>>>> Stashed changes
    })
})