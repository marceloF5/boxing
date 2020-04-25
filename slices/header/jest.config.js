module.exports = {
    cacheDirectory: '.jest-cache',
    coverageDirectory: '.jest-coverage',
    coverageReporters: ['html', 'text'],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
    moduleNameMapper: {
        '^.+\\.(css|less|scss)$': 'babel-jest',
        '@ui/(.+)$': '<rootDir>../../packages/$1/src',
        '@portal/(.+)$': '<rootDir>../../slices/$1/src',
    },
    setupFilesAfterEnv: ['<rootDir>../../config/jest/test.config.js'],
    transform: {
        '^.+\\.(js|jsx|mjs)$': '<rootDir>../../config/jest/jest-transformer.js',
    },
};
