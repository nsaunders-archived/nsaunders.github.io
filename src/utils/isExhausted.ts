import { F } from "ts-toolbelt";

export function ifExhausted<T, U>(props: F.Exact<T, {}>, u: U): U {
  return u;
}
