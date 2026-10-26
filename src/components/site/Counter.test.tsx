import { describe, expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { Counter } from "./Counter";

const initialNumber = (to: number, suffix: string) =>
  Number.parseFloat(renderToStaticMarkup(<Counter to={to} suffix={suffix} />).replace(/<[^>]*>/g, ""));

describe("counter initial server values", () => {
  test("preserves 12 completed projects before JavaScript", () => {
    expect(initialNumber(12, "+")).toBe(12);
  });
  test("preserves 100 percent original design before JavaScript", () => {
    expect(initialNumber(100, "%")).toBe(100);
  });
  test("preserves 24 hour support before JavaScript", () => {
    expect(initialNumber(24, "h")).toBe(24);
  });
  test("preserves 100 percent ROI focus before JavaScript", () => {
    expect(initialNumber(100, "%")).toBe(100);
  });
});