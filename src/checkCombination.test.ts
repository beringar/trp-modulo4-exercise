import { test, expect, describe } from "vitest";
import { checkCombination } from "./checkCombination.js";

describe("given a checkCombination function", () => {
  test("function must be defined", () => {
    expect(checkCombination).toBeDefined();
  });

  test("when a string is passed as argument returns a boolean", () => {
    expect(typeof checkCombination("((((")).toBe("boolean");
  });

  test("when a string received contains any character not allowed returns false", () => {
    expect(checkCombination("((a((")).toBe(false);
    expect(checkCombination("[[")).toBe(true);
    expect(checkCombination("")).toBe(true);
  });

  test("when a string received has odd length ", () => {
    expect(checkCombination("([(")).toBe(false);
  });

  test("when a string received has not the proper combination of open/closed characters returns false", () => {
    expect(checkCombination("([([")).toBe(false);
  });
});
