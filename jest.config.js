module.exports = {
    transform: {
        '^.+\\.jsx?$': 'babel-jest',  // Transform .js and .jsx files using babel-jest
    },
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
};
