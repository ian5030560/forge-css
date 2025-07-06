import { createDefaultEsmPreset } from "ts-jest";

const tsJestCfg = createDefaultEsmPreset({
  tsconfig: "tsconfig.test.json",
  // diagnostics: {
  //   ignoreCodes: [1343]
  // },
  // astTransformers: {
  //   before: [
  //     {
  //       path: 'ts-jest-mock-import-meta',
  //       // options: { metaObjectReplacement: { url: 'https://www.url.com' } }
  //     }
  //   ]
  // }
});

/** @type {import("jest").Config} **/
export default {
  ...tsJestCfg,
  testEnvironment: "node",
  rootDir: "test",
  testRegex: ".\\.test\\.ts$"
};