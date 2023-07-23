import useFocusOutline from "@/hooks/useFocusOutline";
import exhausted from "@/utils/exhausted";
import { ComponentPropsWithoutRef, forwardRef, useCallback } from "react";
import Highlight from "./Highlight";
import Surface from "./Surface";
import Typography from "./Typography";

export type Props = Pick<
  ComponentPropsWithoutRef<"input">,
  "disabled" | "onBlur" | "onChange" | "value"
>;

export default forwardRef<HTMLInputElement, Props>(function TextInput(
  { disabled, onBlur: onBlurProps, onChange, value, ...restProps },
  ref
) {
  exhausted(restProps);

  const [
    ,
    {
      onFocus,
      onBlur: onBlurFocusOutline,
      style: focusOutlineStyle,
      ...restFocusOutline
    },
  ] = useFocusOutline();
  exhausted(restFocusOutline);

  const onBlur = useCallback<Exclude<typeof onBlurProps, undefined>>(
    (e) => {
      onBlurFocusOutline?.();
      onBlurProps?.(e);
    },
    [onBlurFocusOutline, onBlurProps]
  );

  return (
    <div
      style={{
        margin: 0,
        display: "inline-flex",
        borderRadius: "0.25em",
        ...focusOutlineStyle,
      }}
    >
      <Surface theme="white" static>
        {({ style: surfaceStyle, ...surfaceRest }) =>
          exhausted(surfaceRest) && (
            <Typography>
              {({ style: typographyStyle, ...typographyRest }) =>
                exhausted(typographyRest) && (
                  <Highlight as={disabled ? "muted" : undefined}>
                    {({ style: highlightStyle, ...highlightRest }) =>
                      exhausted(highlightRest) && (
                        <input
                          onBlur={onBlur}
                          onChange={onChange}
                          onFocus={onFocus}
                          value={value}
                          ref={ref}
                          style={{
                            appearance: "none",
                            outline: 0,
                            border: 0,
                            margin: 0,
                            padding: "0.5em 0.75em",
                            borderRadius: "0.25em",
                            ...surfaceStyle,
                            ...typographyStyle,
                            ...highlightStyle,
                          }}
                          disabled={disabled}
                          {...restProps}
                        />
                      )
                    }
                  </Highlight>
                )
              }
            </Typography>
          )
        }
      </Surface>
    </div>
  );
});
