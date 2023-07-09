export function ifExhausted<P, T>(
  props: keyof P extends never ? P : never,
  value: T
): T {
  return value;
}
