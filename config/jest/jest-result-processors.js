const coverage = require('ts-jest/coverageprocessor');
const junit = require('jest-junit');

// This is required since jest support only one test result processor
module.exports = function () {
  console.log(arguments);
  coverage.apply(this, arguments);
  return junit.apply(this, arguments);
};
