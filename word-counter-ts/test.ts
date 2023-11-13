import { test, describe, expect } from "@jest/globals";
import { countWords } from "./main";

describe("word counter", () => {
  test("word count should be 5", () => {
    expect(countWords("koko loko mama tata baka")).toBe(5);
  });
});
