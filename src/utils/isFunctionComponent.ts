import type { FunctionComponent, ReactNode } from "react";
import { isValidElement } from "react";

export default function isFunctionComponent<P>(
  x: FunctionComponent<P> | ReactNode
): x is FunctionComponent<P> {
  return (
    typeof x === "function" ||
    (!!x && typeof x === "object" && !isValidElement(x) && !isIterable(x))
  );
}

function isIterable(x: unknown): x is Iterable<unknown> {
  return Symbol.iterator in x;
}
