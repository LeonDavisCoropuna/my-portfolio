export const THEME_COOKIE = "theme";
export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export function isTheme(value: string | undefined): value is Theme {
  return value === "light" || value === "dark" || value === "system";
}

export function isResolvedTheme(value: string | undefined): value is ResolvedTheme {
  return value === "light" || value === "dark";
}

export function resolveTheme(theme: Theme, systemTheme: ResolvedTheme): ResolvedTheme {
  return theme === "system" ? systemTheme : theme;
}
