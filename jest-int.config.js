const jestConfig = require('./jest.config')

/** @type {import('jest').Config} */
module.exports = {
  ...jestConfig,
  testMatch: [
    '<rootDir>/tests/integration/**/*.spec.ts',
    '!<rootDir>/tests/unit/**/*.spec.ts'
  ]
}
