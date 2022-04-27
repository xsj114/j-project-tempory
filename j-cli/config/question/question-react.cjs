const reactQuestions = [
    {
        type: 'list',
        name: 'react',
        message: ( beforeAnswer ) => {
            return 'which framework do you want to use'
        },
        choices: ( beforeAnswer ) => {
            return ['react']
        }
    }
]

module.exports = reactQuestions
