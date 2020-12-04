module.exports = {
  collectCoverage: true,
  preset: 'ts-jest',
  collectCoverageFrom: ['<rootDir>/src/components/**'],
  coverageDirectory: './coverage',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/__tests__/**'],

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  coveragePathIgnorePatterns: ['.*/src/.*\\.d\\.ts']
};
