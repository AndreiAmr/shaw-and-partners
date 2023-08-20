import "ignore-styles";

export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.svg": "<rootDir>/__mocks__/svg.ts",
    // "\\.css": "identity-obj-proxy",
  },
};
