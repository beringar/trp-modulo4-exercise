import { test, expect, describe } from "vitest";
import { checkCombination } from "./checkCombination.js";

describe("given a checkCombination function", () => {
  test("function must be defined", () => {
    expect(checkCombination).toBeDefined();
  });
  test("when a string is passed as argument returns a boolean", () => {
    expect(typeof checkCombination("((((")).toBe("boolean");
  });
});
