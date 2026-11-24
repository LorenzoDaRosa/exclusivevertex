import { describe, expect, test } from "bun:test";
import { sceneIndex, sceneStep, sceneTravel } from "./scroll-model";

describe("V8 reversible scroll sequences", () => {
  test("desktop advances through all five panels and returns on upward scrolling", () => {
    expect(sceneStep(1280)).toBe(182);
    expect([0, 182, 364, 546, 728, 546, 364, 182, 0].map((distance) => sceneIndex(distance, 182, 5))).toEqual([0, 1, 2, 3, 4, 3, 2, 1, 0]);
  });
  test("mobile advances through all five panels and returns on upward scrolling", () => {
    expect(sceneStep(390)).toBe(122);
    expect([0, 122, 244, 366, 488, 366, 244, 122, 0].map((distance) => sceneIndex(distance, 122, 5))).toEqual([0, 1, 2, 3, 4, 3, 2, 1, 0]);
  });
  test("three process panels stay bounded before and after the sequence", () => {
    expect([-300, 0, 182, 364, 900].map((distance) => sceneIndex(distance, 182, 3))).toEqual([0, 0, 1, 2, 2]);
    expect(sceneTravel(182, 3)).toBe(464.09999999999997);
  });
});