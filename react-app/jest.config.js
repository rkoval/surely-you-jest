// Full API: https://facebook.github.io/jest/docs/en/configuration.html
module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx,mjs}'],
  setupFiles: ['<rootDir>/config/polyfills.js'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}',
  ],
  testEnvironment: 'jsdom',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)':
      '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
  },
  moduleFileExtensions: [
    'web.js',
    'mjs',
    'js',
    'json',
    'web.jsx',
    'jsx',
    'node',
  ],
}
