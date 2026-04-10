import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { add, subtract, multiply, divide } from "../src/calc.js";

describe("calc", () => {
  it("adds two numbers", () => {
    assert.equal(add(2, 3), 5);
  });

  it("subtracts two numbers", () => {
    assert.equal(subtract(5, 3), 2);
  });

  it("multiplies two numbers", () => {
    assert.equal(multiply(4, 3), 12);
  });

  it("divides two numbers", () => {
    assert.equal(divide(10, 2), 5);
  });

  it("throws on divide by zero", () => {
    assert.throws(() => divide(10, 0));
  });
});
