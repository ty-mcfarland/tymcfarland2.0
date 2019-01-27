/* eslint-disable */

module.exports = {
    globals: {
      __TRANSFORM_HTML__: true,
      __DEV__: true,
      __PRODUCTION__: false,
    },
    transform: {
      '^.+\\.(ts|js|html)$':
        '<rootDir>/node_modules/jest-preset-angular/preprocessor.js',
    },
    testMatch: ['**/src/**/*.spec.{ts,js}'],
    moduleFileExtensions: ['ts', 'js', 'html', 'json'],
    moduleNameMapper: {
      '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/file.mock.ts',
    },
    snapshotSerializers: [
      'jest-preset-angular/AngularSnapshotSerializer.js',
      'jest-preset-angular/HTMLCommentSerializer.js',
    ],
    setupTestFrameworkScriptFile: '<rootDir>/setup-jest.ts',
    verbose: false,
    bail: false,
    testURL: 'http://localhost/',
    collectCoverage: false,
    testPathIgnorePatterns: ['<rootDir>/node_modules/', 'dist'],
    coverageDirectory: './reports/coverage-app',
    collectCoverageFrom: [
      'src/**/*.ts',
      '!src/custom-typings.d.ts',
      '!src/typings.d.ts',
    ],
    coveragePathIgnorePatterns: [
      '<rootDir>/src/tests',
      '<rootDir>/src/types',
      '<rootDir>/src/mocks',
    ],
  };
  