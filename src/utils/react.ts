import { ComponentType, ReactNode, isValidElement } from "react";

export function isComponent<P>(
  x: ComponentType<P> | ReactNode
): x is ComponentType<P> {
  return (
    typeof x === "function" ||
    (!!x && typeof x === "object" && !isValidElement(x) && !isIterable(x))
  );
}

function isIterable(x: any): x is Iterable<unknown> {
  return Symbol.iterator in x;
}
