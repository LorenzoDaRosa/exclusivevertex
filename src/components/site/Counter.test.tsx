import { describe, expect, test } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import { Counter } from "./Counter";

describe("counter initial server values", () => {
  test("preserves 12 completed projects before JavaScript", () => {
    expect(renderToStaticMarkup(<Counter to={12} suffix="+" />)).toContain('>12+<');
  });
  test("preserves 100 percent original design before JavaScript", () => {
    expect(renderToStaticMarkup(<Counter to={100} suffix="%" />)).toContain('>100%<');
  });
  test("preserves 24 hour support before JavaScript", () => {
    expect(renderToStaticMarkup(<Counter to={24} suffix="h" />)).toContain('>24h<');
  });
  test("preserves 100 percent ROI focus before JavaScript", () => {
    expect(renderToStaticMarkup(<Counter to={100} suffix="%" />)).toContain('>100%<');
  });
});