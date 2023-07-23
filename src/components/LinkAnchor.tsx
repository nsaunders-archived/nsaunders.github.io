"use client";

import type { CSSProperties, ReactNode } from "react";
import exhausted from "@/utils/exhausted";
import Link, { LinkProps } from "next/link";
import Anchor from "./Anchor";

export type Props = LinkProps & { children?: ReactNode; style?: CSSProperties };

export default function LinkAnchor({
  href,
  as,
  replace,
  scroll,
  shallow,
  passHref,
  prefetch,
  locale,
  legacyBehavior,
  onMouseEnter: linkOnMouseEnter,
  onTouchStart,
  onClick: linkOnClick,
  children,
  style: linkStyle,
  ...restProps
}: Props) {
  return (
    exhausted(restProps) && (
      <Anchor>
        {({
          onClick: anchorOnClick,
          onFocus,
          onBlur,
          onMouseEnter: anchorOnMouseEnter,
          onMouseLeave,
          style: anchorStyle,
          tabIndex,
          ...restProps
        }) =>
          exhausted(restProps) && (
            <Link
              onClick={(e) => {
                linkOnClick?.(e);
                anchorOnClick?.(e);
              }}
              onFocus={onFocus}
              onBlur={onBlur}
              onMouseEnter={(e) => {
                linkOnMouseEnter?.(e);
                anchorOnMouseEnter?.();
              }}
              onMouseLeave={onMouseLeave}
              style={{ ...anchorStyle, ...linkStyle }}
              tabIndex={tabIndex}
              href={href}
              as={as}
              replace={replace}
              scroll={scroll}
              shallow={shallow}
              passHref={passHref}
              prefetch={prefetch}
              locale={locale}
              legacyBehavior={legacyBehavior}
              onTouchStart={onTouchStart}
            >
              {children}
            </Link>
          )
        }
      </Anchor>
    )
  );
}
