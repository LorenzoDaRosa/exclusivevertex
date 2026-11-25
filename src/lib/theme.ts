export type SiteTheme = "light" | "dark";

/** Only an explicit stored choice enables dark mode. */
export function savedTheme(value: string | null): SiteTheme {
  return value === "dark" ? "dark" : "light";
}