import type {
  ComponentProps,
  ComponentType,
  CSSProperties,
  FunctionComponent,
} from "react";
import { O, U } from "ts-toolbelt";
import { forwardRef } from "react";
import isFunctionComponent from "@/utils/isFunctionComponent";

function makeStyle(fontSizeEm: number, fontWeight: 400 | 700 = 400) {
  const marginBlock = `${1.5 / fontSizeEm}em`;
  return {
    fontSize: `${fontSizeEm}em`,
    fontWeight,
    lineHeight: 1.25,
    marginBlock,
  };
}

const variantStyles = {
  regularBase: makeStyle(1, 400),
  boldBase: makeStyle(1, 700),
  boldLarge: makeStyle(1.2, 700),
  regularXL: makeStyle(1.601),
  regular2XL: makeStyle(2),
  regular3XL: makeStyle(2.4),
  regular4XL: makeStyle(3),
} as const;

export type ForwardProps = {
  style?: CSSProperties;
};

export type Props = U.Strict<
  ComponentProps<"span"> | { children: FunctionComponent<ForwardProps> }
> & { margins?: boolean; variant?: keyof typeof variantStyles };

export default forwardRef<HTMLSpanElement, O.Omit<Props, "ref">>(
  function Typography(
    { children, margins, style, variant = "regularBase", ...restProps },
    ref
  ) {
    const forwardProps: ForwardProps = {
      style: {
        ...variantStyles[variant],
        ...(variant === "regularBase" ? { fontSize: "1rem" } : undefined),
        ...(margins ? undefined : { marginBlock: 0 }),
        ...style,
      },
    };

    return isFunctionComponent(children) ? (
      children(forwardProps)
    ) : (
      <span {...forwardProps} {...restProps} ref={ref}>
        {children}
      </span>
    );
  }
) as ComponentType<Props>;
