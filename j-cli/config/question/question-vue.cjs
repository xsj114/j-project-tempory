const { 
    commonFeatures
} = require('./question-common.cjs')

const vueQuestions = [
    {
        type: 'checkbox',
        name: 'vueFrameFeatures',
        message: () => {
            return 'Check the features needed for your project'
        },
        choices: () => {
            return [
                {
                    name: 'Choose vue version',
                    value: 'vueVersion',
                    checked: true
                },
                {
                    name: 'Vuex',
                    value: 'vuex'
                },
            ].concat( commonFeatures )
        },
        when: true,
        loop: false
    },
    {
        type: 'list',
        name: 'version',
        message: () => {
            return 'Choose a version of Vue.js that you want to start the project with'
        },
        choices: () => {
            return [
                {
                    name: '3.x',
                    value: 3
                },
                {
                    name: '2.x',
                    value: 2
                }
            ]
        },
        when: ( { vueFrameFeatures } ) => {
            return vueFrameFeatures.includes('vueVersion')
        }
    },
    {
        type: 'confirm',
        name: 'routerOption',
        message: () => {
            return 'Use history mode for router?'
        },
        when: ( { vueFrameFeatures } ) => {
            return vueFrameFeatures.includes('router')
        }
    },
    {
        type: 'list',
        name: 'unitTestOption',
        message: () => {
            return 'Pick a unit testing solution'
        },
        choices: () => {
            return [
                {
                    name: 'Jest',
                    value: 'jest'
                }
            ]
        },
        when: ( { vueFrameFeatures } ) => {
            return vueFrameFeatures.includes('unitTest')
        }
    },
    {
        type: 'list',
        name: 'cssOption',
        message: () => {
            return 'Pick a CSS pre-processor'
        },
        choices: () => {
            return [
                {
                    name: 'Sass/SCSS',
                    value: 'sass'
                },
                {
                    name: 'Less',
                    value: 'less'
                },
                {
                    name: 'Stylus',
                    value: 'stylus'
                }
            ]
        },
        when: ( { vueFrameFeatures } ) => {
            return vueFrameFeatures.includes('cssProcess')
        }
    }
]

module.exports = vueQuestions
