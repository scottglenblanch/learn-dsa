/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable no-undef */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.test.[jt]s', '**/?(*.)+(spec|test).[jt]s'],
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
};