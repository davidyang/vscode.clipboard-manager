//
// PLEASE DO NOT MODIFY / DELETE UNLESS YOU KNOW WHAT YOU ARE DOING
//
// This file is providing the test runner to use when running extension tests.
// By default the test runner in use is Mocha based.

import * as IstanbulTestRunner from "./istanbultestrunner";

const testRunner = IstanbulTestRunner;

const mochaOpts: Mocha.MochaOptions = {
  ui: "tdd", // the TDD UI is being used in extension.test.ts (suite, test, etc.)
  useColors: true, // colored output from test results,
  timeout: 10000, // default timeout: 10 seconds
  reporter: "mocha-jenkins-reporter",
  reporterOptions: {
    junit_report_name: "Extension Tests",
    junit_report_stack: 1,
    junit_report_path: __dirname + "/../../test-reports/extension_tests.xml"
  }
};

testRunner.configure(
  mochaOpts,
  // Coverage configuration options
  {
    coverConfig: "../../coverconfig.json"
  }
);

module.exports = testRunner;
