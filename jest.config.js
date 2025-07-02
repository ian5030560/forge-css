/* eslint-disable @typescript-eslint/no-require-imports */
const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset({
  tsconfig: "tsconfig.test.json",
}).transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  rootDir: "test",
  testRegex: ".\\.test\\.ts$",
  transform: {
    ...tsJestTransformCfg,
  },
};