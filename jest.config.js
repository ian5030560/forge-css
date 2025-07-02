const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  rootDir: "test",
  testRegex: ".\.test\.ts$",
  transform: {
    ...tsJestTransformCfg,
  },
};