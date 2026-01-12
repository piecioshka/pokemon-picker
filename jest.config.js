module.exports = {
    testEnvironment: 'node',
    testMatch: ['**/test/unit/specs/test.*.js'],
    collectCoverageFrom: [
        'index.js',
        '!**/node_modules/**',
        '!**/test/**'
    ],
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'html']
};
