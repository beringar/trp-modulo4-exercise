import { test, expect, describe } from "vitest";
import { checkCombination } from "./checkCombination.js";

describe("given a checkCombination function", () => {
  describe("function must be defined", () => {
    test("checkCombination", () => {
      expect(checkCombination).toBeDefined();
    });
  });
});
