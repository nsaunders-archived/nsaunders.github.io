export default function exhausted(_: Record<string, never>) {
  return true as const;
}
