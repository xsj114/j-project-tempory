module.exports = {
    'root': true,
    'env': {
        'browser': true,
        'commonjs': true,
        'es2021': true,
    },
    'extends': [
        'google',
    ],
    'parserOptions': {
        'ecmaVersion': 'latest',
    },
    'rules': {
        'space-in-parens': [ 'error', 'always' ],
        'indent': [ 'error', 4 ],
        'block-spacing': [ 'error', 'always' ],
        'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
        'semi-spacing': [ 'error', { 'before': false, 'after': true } ],
        'space-infix-ops': [ 'error', { 'int32Hint': false } ],
        'array-bracket-spacing': [ 'error', 'always' ],
        'object-curly-spacing': [ 'error', 'always' ],
        'max-len': [ 'error', { 'code': 100 } ],
        'computed-property-spacing': [ 'error', 'always' ],
    },
};
