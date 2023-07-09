export function ifExhausted<T>(props: Record<string, never>, value: T): T {
  return value;
}
