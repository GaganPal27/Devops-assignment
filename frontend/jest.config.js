/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/__tests__/**/*.test.(ts|tsx)'],
  setupFiles: ['whatwg-fetch'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
}

module.exports = config

