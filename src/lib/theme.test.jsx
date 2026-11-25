import { expect, test } from "bun:test";
import { savedTheme } from "./theme";

test("new visitors start in light mode without a device preference fallback", () => {
  expect(savedTheme(null)).toBe("light");
});
test("only the manually saved dark preference enables dark mode", () => {
  expect(savedTheme("dark")).toBe("dark");
  expect(savedTheme("light")).toBe("light");
  expect(savedTheme("system-dark")).toBe("light");
});