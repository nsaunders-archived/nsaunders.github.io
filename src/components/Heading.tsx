import {
  ComponentProps,
  ComponentType,
  CSSProperties,
  ReactElement,
  forwardRef,
} from "react";
import { O, U } from "ts-toolbelt";
import Typography from "./Typography";
import exhausted from "@/utils/exhausted";

export type ForwardProps = {
  style?: CSSProperties;
};

export type Props = U.Strict<
  (
    | ComponentProps<"h1">
    | { children: (forwardProps: ForwardProps) => ReactElement }
  ) & {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
  }
>;

export default forwardRef<HTMLHeadingElement, O.Omit<Props, "ref">>(
  function Heading(
    { children, level = 1, style: headingStyle, ...restProps },
    ref
  ) {
    const DefaultTag = `h${level}` as const;
    return (
      <Typography
        margins
        variant={
          (
            [
              undefined,
              "regular4XL",
              "regular3XL",
              "regular2XL",
              "regularXL",
              "boldLarge",
              "boldBase",
            ] as const
          )[level]
        }
      >
        {({ style: typographyStyle, ...typographyRestProps }) =>
          exhausted(typographyRestProps) &&
          (typeof children === "function" ? (
            children({ style: { ...typographyStyle, ...headingStyle } })
          ) : (
            <DefaultTag
              style={{ ...typographyStyle, ...headingStyle }}
              {...restProps}
              ref={ref}
            >
              {children}
            </DefaultTag>
          ))
        }
      </Typography>
    );
  }
) as ComponentType<Props>;
