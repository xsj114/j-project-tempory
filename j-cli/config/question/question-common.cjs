const commonQuestions = [
    {
        type: 'list',
        name: 'frameType',
        message: ( beforeAnswer ) => {
            return 'which framework do you want to use'
        },
        choices: ( beforeAnswer ) => {
            return ['vue', 'react']
        }
    }
]

const commonFeatures = [
    {
        name: 'Babel',
        value: 'babel',
    },
    {
        name: 'TypeScript',
        value: 'typeScript'
    },
    {
        name: 'Router',
        value: 'router',
        checked: true
    },
    {
        name: 'Linter',
        value: 'linter'
    },
    {
        name: 'Unit Testing',
        value: 'unitTest'
    },
    {
        name: 'Css Pre-processors',
        value: 'cssProcess'
    }
]

module.exports = {
    commonQuestions,
    commonFeatures
}
