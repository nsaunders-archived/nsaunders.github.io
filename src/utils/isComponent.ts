import type { ComponentType, ReactNode } from "react";
import { isValidElement } from "react";

export default function isComponent<P>(
  x: ComponentType<P> | ReactNode
): x is ComponentType<P> {
  return (
    typeof x === "function" ||
    (!!x && typeof x === "object" && !isValidElement(x) && !isIterable(x))
  );
}

function isIterable(x: unknown): x is Iterable<unknown> {
  return Symbol.iterator in x;
}
